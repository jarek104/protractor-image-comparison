'use strict';

let config = require('./protractor.shared.conf.js').config;

config.capabilities = {
    browserName: 'chrome',
    deviceName: 'AVD_for_Nexus_5_by_Google',
    logName: 'Nexus 5 By Google ChromeDriver',
    platformName: 'android'
};

config.seleniumAddress = 'http://localhost:4728/wd/hub';

config.specs = ['../mobile.spec.js'];

exports.config = config;