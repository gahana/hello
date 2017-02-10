'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        cucumberjs: {
            src: 'features/*',
            options: {
                // tags: '@current',
                // format: 'pretty',
                format: 'json',
                output: 'report.json',
                steps: 'step_definitions'
            }
        }
    });

    grunt.loadNpmTasks('grunt-cucumber');
    grunt.registerTask('tests', ['cucumberjs']);
}