'use strict';

module.exports = {

  build: {
    less: {
      enabled: false
    },
    bless: {
      enabled: false
    },
    spec: {
      runInPrepare: false
    },
    e2e: {
      runInDev: false,
      runInDist: false
    },
    server: {
      runInDist: false
    }
  },

  app: {
    files: {
      templates2js: [ ],
      translations: [ ],
      translations2js: [ ]
    }
  },

  vendor: {
    files: {
      js: [
        'jquery/dist/jquery.js',
        'angular/angular.js',
        'highcharts/highcharts.js',
        '../../w11k-highcharts/src/w11k-highcharts.js'
      ],
      js_mock: [
      ],
      js_spec: [
      ],
      js_e2e: [
      ],
      css: [
        'bootstrap/dist/css/bootstrap.css'
      ],
      assets: [
        'font-awesome/fonts/*.*'
      ]
    }
  }
};