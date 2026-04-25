var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3670",
        "ok": "3670",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "98",
        "ok": "98",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9923",
        "ok": "9923",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "894",
        "ok": "894",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1341",
        "ok": "1341",
        "ko": "-"
    },
    "percentiles1": {
        "total": "240",
        "ok": "240",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1139",
        "ok": "1139",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3370",
        "ok": "3370",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5282",
        "ok": "5282",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2527,
    "percentage": 69
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 350,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 793,
    "percentage": 22
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "166.818",
        "ok": "166.818",
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
        "total": "2101",
        "ok": "2101",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "98",
        "ok": "98",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9923",
        "ok": "9923",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "614",
        "ok": "614",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1145",
        "ok": "1145",
        "ko": "-"
    },
    "percentiles1": {
        "total": "223",
        "ok": "223",
        "ko": "-"
    },
    "percentiles2": {
        "total": "355",
        "ok": "355",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3287",
        "ok": "3287",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4351",
        "ok": "4351",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1762,
    "percentage": 84
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 105,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 234,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "95.5",
        "ok": "95.5",
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
        "total": "1569",
        "ok": "1569",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "98",
        "ok": "98",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9920",
        "ok": "9920",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1268",
        "ok": "1268",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1486",
        "ok": "1486",
        "ko": "-"
    },
    "percentiles1": {
        "total": "887",
        "ok": "887",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2173",
        "ok": "2173",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4224",
        "ok": "4224",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6015",
        "ok": "6015",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 765,
    "percentage": 49
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 245,
    "percentage": 16
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 559,
    "percentage": 36
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "71.318",
        "ok": "71.318",
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
