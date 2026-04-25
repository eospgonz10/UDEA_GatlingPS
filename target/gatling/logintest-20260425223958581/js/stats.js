var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "300",
        "ok": "300",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "253",
        "ok": "253",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "822",
        "ok": "822",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "472",
        "ok": "472",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "percentiles1": {
        "total": "484",
        "ok": "484",
        "ko": "-"
    },
    "percentiles2": {
        "total": "531",
        "ok": "531",
        "ko": "-"
    },
    "percentiles3": {
        "total": "637",
        "ok": "637",
        "ko": "-"
    },
    "percentiles4": {
        "total": "655",
        "ok": "655",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 299,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "27.273",
        "ok": "27.273",
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
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "322",
        "ok": "322",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "618",
        "ok": "618",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "459",
        "ok": "459",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "percentiles1": {
        "total": "479",
        "ok": "479",
        "ko": "-"
    },
    "percentiles2": {
        "total": "523",
        "ok": "523",
        "ko": "-"
    },
    "percentiles3": {
        "total": "569",
        "ok": "569",
        "ko": "-"
    },
    "percentiles4": {
        "total": "597",
        "ok": "597",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 100,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.091",
        "ok": "9.091",
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
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "253",
        "ok": "253",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "822",
        "ok": "822",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "478",
        "ok": "478",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "107",
        "ok": "107",
        "ko": "-"
    },
    "percentiles1": {
        "total": "487",
        "ok": "487",
        "ko": "-"
    },
    "percentiles2": {
        "total": "539",
        "ok": "539",
        "ko": "-"
    },
    "percentiles3": {
        "total": "641",
        "ok": "641",
        "ko": "-"
    },
    "percentiles4": {
        "total": "660",
        "ok": "660",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 199,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.182",
        "ok": "18.182",
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
