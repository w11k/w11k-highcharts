'use strict';

var grunt = require('grunt');
var fabs = require('fabs');
var path = require('path');
var lodash = require('lodash');

module.exports = function () {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  var configFolder = path.resolve('./build-config');
  var fabsConfig = fabs.getGruntConfig(configFolder);

  var customConfig = {
    clean: {
      release: ['./index.html', '*/*', '!node_modules/*', '!vendor/*',
      '!src/*', '!build-output/*', '!build-config/*']
    },
    copy: {
      release: {
        files: [{
          expand: true,
          cwd: 'build-output/compiled',
          src: ['**'],
          dest: './'
        }]
      }
    }
  };



  var config = lodash.merge({}, fabsConfig, customConfig);
  grunt.initConfig(config);

  grunt.registerTask('release', ['dist', 'clean:release', 'copy:release']);
};