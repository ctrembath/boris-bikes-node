(function () {
  'use strict';
}());

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mocha_casperjs: {
      options: {
      },
      files: {
        src: ['test/**/*']
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/*.js', 'spec/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
   watch: {
      files: ['Gruntfile.js', 'src/*.js', 'spec/*.js'],
      tasks: ['jshint']
    },
    jasmine_node: {
      options: {
      forceExit: true,
      all: ['spec/']
    }
  }
  });
  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.registerTask('default', ['jasmine_node']);
};