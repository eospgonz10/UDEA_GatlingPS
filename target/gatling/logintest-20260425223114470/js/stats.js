var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3621",
        "ok": "3621",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "98",
        "ok": "98",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10141",
        "ok": "10141",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "915",
        "ok": "915",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1484",
        "ok": "1484",
        "ko": "-"
    },
    "percentiles1": {
        "total": "217",
        "ok": "217",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1056",
        "ok": "1056",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4308",
        "ok": "4308",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5975",
        "ok": "5975",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2616,
    "percentage": 72
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 272,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 733,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "164.591",
        "ok": "164.591",
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
        "total": "1989",
        "ok": "1989",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10141",
        "ok": "10141",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "640",
        "ok": "640",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1258",
        "ok": "1258",
        "ko": "-"
    },
    "percentiles1": {
        "total": "213",
        "ok": "213",
        "ko": "-"
    },
    "percentiles2": {
        "total": "307",
        "ok": "307",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4248",
        "ok": "4248",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5296",
        "ok": "5296",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1744,
    "percentage": 88
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 33,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 212,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.409",
        "ok": "90.409",
        "ko": "-"
    }
}
    },"req_login-peak-219e3": {
        type: "REQUEST",
        name: "login-peak",
path: "login-peak",
pathFormatted: "req_login-peak-219e3",
stats: {
    "name": "login-peak",
    "numberOfRequests": {
        "total": "1632",
        "ok": "1632",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "98",
        "ok": "98",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9510",
        "ok": "9510",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1250",
        "ok": "1250",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1660",
        "ok": "1660",
        "ko": "-"
    },
    "percentiles1": {
        "total": "267",
        "ok": "267",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1903",
        "ok": "1903",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5099",
        "ok": "5099",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6544",
        "ok": "6544",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 872,
    "percentage": 53
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 239,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 521,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "74.182",
        "ok": "74.182",
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
