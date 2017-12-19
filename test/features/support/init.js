'use strict';

const apickli = require('apickli');
const {defineSupportCode} = require('cucumber');


defineSupportCode(function({Before, Given, When, Then}) {
    Before(function() {
        this.apickli = new apickli.Apickli('https', "demo24-test.apigee.net");
    });

    Given(/^I set query parameter (.*) to (.*)$/, function(param, value, callback) {
        var obj = {};
        obj.parameter = param;
        obj.value = value;
        var arr = [];
        arr.push(obj);
        this.apickli.setQueryParameters(arr);
        callback();
    });
});

defineSupportCode(function({setDefaultTimeout}) {
    setDefaultTimeout(10 * 1000); // this is in ms
});