'use strict';

module.exports = {

  build: {
    less: {
      enabled: false
    },
    sass: {
      enabled: false
    },
    bless: {
      enabled: false
    },
    server: {
      runInDist: false
    }
  },

  app: {
    files: {
      root: 'src',
      templates2js: [ ],
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