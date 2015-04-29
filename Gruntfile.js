'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    jshint: {
      dev: {
        src: ['Gruntfile.js', 'greet.js', 'test/**/*.js']
      },

      options: {
        node: true,
        globals: {
          describe: true,
          it: true,
          before: true,
          after: true,
          beforeEach: true,
          afterEach: true
        }
      }
    }
  });

  grunt.registerTask('test', ['jshint:dev']);
  grunt.registerTask('default', ['test']);
};
