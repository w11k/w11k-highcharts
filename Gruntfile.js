'use strict';

var grunt = require('grunt');
var fabs = require('fabs');
var path = require('path');
var lodash = require('lodash');

module.exports = function () {

  grunt.loadNpmTasks('grunt-contrib-clean');

  var configFolder = path.resolve('./build-config');
  var fabsConfig = fabs.createConfig(configFolder);
  var fabsGruntConfig = fabsConfig.getGruntConfig();
  var fabsBuildConfig = fabsConfig.getBuildConfig();

  var additionalConfig = {
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



  var gruntConfig = lodash.merge({}, fabsGruntConfig, additionalConfig);

  grunt.registerTask('release', ['dist', 'clean:release', 'copy:release']);
  grunt.initConfig(gruntConfig);

};