var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1993",
        "ok": "1993",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4405",
        "ok": "4405",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "611",
        "ok": "611",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1088",
        "ok": "1088",
        "ko": "-"
    },
    "percentiles1": {
        "total": "205",
        "ok": "205",
        "ko": "-"
    },
    "percentiles2": {
        "total": "339",
        "ok": "339",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3690",
        "ok": "3690",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4331",
        "ok": "4331",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1694,
    "percentage": 85
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 75,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 224,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "142.357",
        "ok": "142.357",
        "ko": "-"
    }
},
contents: {
"req_login-normal-e85dc": {
        type: "REQUEST",
        name: "login-normal",
path: "login-normal",
pathFormatted: "req_login-normal-e85dc",
stats: {
    "name": "login-normal",
    "numberOfRequests": {
        "total": "1993",
        "ok": "1993",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4405",
        "ok": "4405",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "611",
        "ok": "611",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1088",
        "ok": "1088",
        "ko": "-"
    },
    "percentiles1": {
        "total": "205",
        "ok": "205",
        "ko": "-"
    },
    "percentiles2": {
        "total": "339",
        "ok": "339",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3690",
        "ok": "3690",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4331",
        "ok": "4331",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1694,
    "percentage": 85
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 75,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 224,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "142.357",
        "ok": "142.357",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
