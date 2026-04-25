package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._

class TransferTest extends Simulation{

  // 1 Http Conf
  val httpConf = http.baseUrl(url)
    .acceptHeader("application/json")
    .contentTypeHeader("application/json")

  // 2 CSV Feeder
  val transferFeeder = csv("transfer-feeder.csv").circular

  // 3 Scenario Definition
  val transferWarmupScenario = scenario("Transfer Warmup")
    .feed(transferFeeder)
    .exec(http("transfer-request")
      .post("/transfer")
      .queryParam("fromAccountId", "${fromAccountId}")
      .queryParam("toAccountId", "${toAccountId}")
      .queryParam("amount", "${amount}")
      .check(status.is(200))
      .check(regex("(?i)(successfully transferred|transferred|in)").exists)
    )

  val transferStressScenario = scenario("Transfer Stress")
    .feed(transferFeeder)
    .exec(http("transfer-stress-request")
      .post("/transfer")
      .queryParam("fromAccountId", "${fromAccountId}")
      .queryParam("toAccountId", "${toAccountId}")
      .queryParam("amount", "${amount}")
      .check(status.is(200))
      .check(regex("(?i)(successfully transferred|transferred|in)").exists)
    )

  val transferWarmupPopulation = transferWarmupScenario.inject(
    rampUsersPerSec(10).to(50).during(transferRampUpDuration)
  )

  val transferStressPopulation = transferStressScenario.inject(
    constantUsersPerSec(transferTargetTps).during(transferStressDuration)
  )

  // 4 Load Scenario
  setUp(
    transferWarmupPopulation.andThen(transferStressPopulation)
  ).protocols(httpConf)
    .assertions(
      global.requestsPerSec.gte(transferTargetTps),
      global.failedRequests.percent.is(0),
      details("transfer-request").successfulRequests.percent.is(100),
      details("transfer-stress-request").successfulRequests.percent.is(100)
    )
}
