package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._

class LoginTest extends Simulation{

  // 1 Http Conf
  val httpConf = http.baseUrl(url)
    .acceptHeader("application/json")
    .contentTypeHeader("application/json")

  // 2 Scenario Definition
  val loginNormalScenario = scenario("Login - Carga Normal")
    .exec(http("login-normal")
      .get(s"/login/$username/$password")
      .check(status.is(200))
    )

  val loginPeakScenario = scenario("Login - Carga Pico")
    .exec(http("login-peak")
      .get(s"/login/$username/$password")
      .check(status.is(200))
    )

  val loginNormalPopulation = loginNormalScenario.inject(
    constantConcurrentUsers(loginNormalUsers).during(loginNormalDuration)
  )

  val loginPeakPopulation = loginPeakScenario.inject(
    constantConcurrentUsers(loginPeakUsers).during(loginPeakDuration)
  )

  // 3 Load Scenario
  setUp(
    loginNormalPopulation.andThen(loginPeakPopulation)
  ).protocols(httpConf)
    .assertions(
      details("login-normal").responseTime.percentile3.lte(loginP95NormalMs),
      details("login-peak").responseTime.percentile3.lte(loginP95PeakMs),
      global.failedRequests.percent.is(0)
    )
}