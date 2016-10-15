/*global module*/
module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        less: {
            dev: {
                files: {
                    'css/home.css': 'less/home.less',
                    'css/main.css': 'less/main.less',
                    'css/form.css': 'less/form.less',
                    'css/order-name.css': 'less/order-name.less',
                    'css/all-orders.css': 'less/all-orders.less',
                    'css/settings.css': 'less/settings.less',
                    'css/sell-work.css': 'less/sell-work.less',
                    'css/work.css': 'less/work.less',
                    'css/search-work.css': 'less/search-work.less',
                    'css/payment-services.css': 'less/payment-services.less',
                    'css/content.css': 'less/content.less'
                }
            }
        },
     
        watch: {
            files: ['less/**/*.less'],
            tasks: ['less']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less']);
};