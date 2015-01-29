module.exports = function(grunt) {
    'use strict';

    //load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    // grunt.loadNpmTasks('connect-livereload');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-wrap');
    grunt.loadNpmTasks('grunt-notify');
    //define tasks
    grunt.registerTask('server', ['connect', 'watch']);

    var baseFile = [

    ];
    //grunt config
    grunt.initConfig({
        //======== 配置相关 ========
        pkg: grunt.file.readJSON('package.json'),
        src: '',
        //文件合并
        concat: {
            //自定义标签的JS初始化函数
            custom_tag_js: {
                src: ['dist/js/xmp.*.js'],
                dest: 'build/xmp.material_ui.unsave.js'
            },
            //自定义标签HTML模板文件
            custom_tag_template: {
                src: ['dist/template/xmp.*.html'],
                dest: 'build/xmp.material_ui.html'
            }
        },
        wrap: {
            //大闭包包裹
            basic: {
                src: ['build/xmp.material_ui.unsave.js'],
                dest: 'build/xmp.material_ui.js',
                options: {
                    wrapper: [';(function (global) {\
if (typeof jSouper === "object") {\
    _material_ui_init_(jSouper);\
} else if (typeof require === "function") {\
    require(["jSouper_base"],function (jSouper) {\
        _material_ui_init_(jSouper);\
    });\
}else{\
    var _ti = setInterval(function(){\
        if (typeof jSouper === "object"){\
            clearInterval(_ti);\
            _material_ui_init_(jSouper);\
        }\
    },100);\
}\
function _material_ui_init_(jSouper){', '\n}\n}(this));']
                }
            }
        },
        less: {
            // development: {
            //     options: {
            //         paths: ["assets/css"]
            //     },
            //     files: {
            //         "build/material_ui.css": "less/exports.less"
            //     }
            // },
            development: {
                files: {
                    "build/material_ui.css": "dist/less/exports.less"
                }
            }
        },
        cssmin: {
            combine: {
                // options: {
                //     banner: '/* Material UI by Gaubee */'
                // },
                files: {
                    "build/material_ui.min.css": ["build/material_ui.css"]
                }
            }
        },
        uglify: {
            options: {
                beautify: false
            },
            my_target: {
                files: {
                    'build/xmp.material_ui.min.js': ['build/xmp.material_ui.js']
                }
            }
        },
        //======== 开发相关 ========
        //开启服务
        connect: {
            server: {
                options: {
                    port: 9009,
                    // Change this to '0.0.0.0' to access the server from outside.
                    // hostname: 'localhost',
                    middleware: function(connect, options) {
                        return [
                            require('connect-livereload')({
                                port: Number('<%= watch.options.livereload %>')
                            }),
                            function(req, res, next) {
                                res.setHeader("Access-Control-Allow-Origin", "*");
                                res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
                                return next();
                            },
                            connect.static(options.base[0]),
                        ];
                    },
                    base: '<%= src %>'
                },
            }
        },

        watch: {
            options: {
                livereload: 35730
            },
            js: {
                files: ['dist/js/xmp.*.js'],
                tasks: ['concat:custom_tag_js', 'wrap', 'uglify'] //,'closure-compiler'
            },
            html: {
                files: ['dist/template/xmp.*.html'],
                tasks: ['concat:custom_tag_template']
            },
            less: {
                files: ['dist/less/*.less', 'dist/less/**/*.less'],
                tasks: ['less', 'cssmin']
            }
        }

    });
};