module.exports = function(grunt) {
    'use strict';

    //load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    // grunt.loadNpmTasks('connect-livereload');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-wrap');
    grunt.loadNpmTasks('grunt-notify');
    //define tasks
    grunt.registerTask('server', ['connect:server', 'watch']);

    var baseFile = [
        'template/xmp.*.html'
    ];
    //grunt config
    grunt.initConfig({
        //======== 配置相关 ========
        pkg: grunt.file.readJSON('package.json'),
        src: '',
        //文件合并
        concat: {
            //无压缩发布版本
            common: {
                src: baseFile,
                dest: 'template/jSouper.js'
            }
        },
        uglify: {
            options: {
                beautify: false
            },
            my_target: {
                files: {
                    'build/jSouper.min.js': ['build/jSouper.js']
                }
            }
        },
        //======== 开发相关 ========
        //开启服务
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                // hostname: 'localhost',
                hostname: '0.0.0.0',
                middleware: function(connect, options) {
                    return [
                        require('connect-livereload')({
                            port: Number('<%= watch.options.livereload %>')
                        }),
                        connect.static(options.base),
                    ];
                }
            },
            server: {
                options: {
                    // keepalive: true,
                    base: '<%= src %>',
                }
            }
        },

        watch: {
            options: {
                livereload: 35729
            },
            js: {
                files: ['src/*.js', 'src/**/*.js'],
                tasks: ['concat' , 'wrap', 'uglify' ] //,'closure-compiler'
            }
        }

    });
};
