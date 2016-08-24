(function(){
    'use strict';
    var gulp = require('gulp'),
        connect = require('gulp-connect'),
        open = require('gulp-open'),
        less = require('gulp-less'),
        rename = require('gulp-rename'),
        header = require('gulp-header'),
        path = require('path'),
        uglify = require('gulp-uglify'),
        sourcemaps = require('gulp-sourcemaps'),
        minifyCSS = require('gulp-minify-css'),
        tap = require('gulp-tap'),
        concat = require('gulp-concat'),
        jshint = require('gulp-jshint'),
        stylish = require('jshint-stylish'),
        fs = require('fs'),
        paths = {
            root: './',
            build: {
                root: 'build/',
                styles: 'build/css/',
                scripts: 'build/lib/'
            },
            dist: {
                root: 'dist/',
                styles: 'dist/css/',
                scripts: 'dist/lib/'
            },
            playground: {
                root: 'playground/'
            },
            source: {
                root: 'src/',
                styles: 'src/less/',
                scripts: 'src/lib/*.lib'
            },
        },
        swiper = {
            filename: 'swiper',
            jsFiles: [
                'src/lib/wrap-start.lib',
                'src/lib/swiper-intro.lib',
                'src/lib/core.lib',
                'src/lib/effects.lib',
                'src/lib/lazy-load.lib',
                'src/lib/scrollbar.lib',
                'src/lib/controller.lib',
                'src/lib/hashnav.lib',
                'src/lib/keyboard.lib',
                'src/lib/mousewheel.lib',
                'src/lib/parallax.lib',
                'src/lib/plugins.lib',
                'src/lib/emitter.lib',
                'src/lib/a11y.lib',
                'src/lib/init.lib',
                'src/lib/swiper-outro.lib',
                'src/lib/swiper-proto.lib',
                'src/lib/dom.lib',
                'src/lib/get-dom-lib.lib',
                'src/lib/dom-plugins.lib',
                'src/lib/wrap-end.lib',
                'src/lib/amd.lib'
            ],
            jQueryFiles : [
                'src/lib/wrap-start.lib',
                'src/lib/swiper-intro.lib',
                'src/lib/core.lib',
                'src/lib/effects.lib',
                'src/lib/lazy-load.lib',
                'src/lib/scrollbar.lib',
                'src/lib/controller.lib',
                'src/lib/hashnav.lib',
                'src/lib/keyboard.lib',
                'src/lib/mousewheel.lib',
                'src/lib/parallax.lib',
                'src/lib/plugins.lib',
                'src/lib/emitter.lib',
                'src/lib/a11y.lib',
                'src/lib/init.lib',
                'src/lib/swiper-outro.lib',
                'src/lib/swiper-proto.lib',
                'src/lib/get-dom-lib.lib',
                'src/lib/dom-plugins.lib',
                'src/lib/wrap-end.lib',
                'src/lib/amd.lib'
            ],
            jQueryUMDFiles : [
                'src/lib/wrap-start-umd.lib',
                'src/lib/swiper-intro.lib',
                'src/lib/core.lib',
                'src/lib/effects.lib',
                'src/lib/lazy-load.lib',
                'src/lib/scrollbar.lib',
                'src/lib/controller.lib',
                'src/lib/hashnav.lib',
                'src/lib/keyboard.lib',
                'src/lib/mousewheel.lib',
                'src/lib/parallax.lib',
                'src/lib/plugins.lib',
                'src/lib/emitter.lib',
                'src/lib/a11y.lib',
                'src/lib/init.lib',
                'src/lib/swiper-outro.lib',
                'src/lib/swiper-proto.lib',
                'src/lib/get-jquery.lib',
                'src/lib/dom-plugins.lib',
                'src/lib/wrap-end-umd.lib',
            ],
            Framework7Files : [
                'src/lib/swiper-intro-f7.lib',
                'src/lib/core.lib',
                'src/lib/effects.lib',
                'src/lib/lazy-load.lib',
                'src/lib/scrollbar.lib',
                'src/lib/controller.lib',
                'src/lib/parallax.lib',
                'src/lib/plugins.lib',
                'src/lib/emitter.lib',
                'src/lib/a11y.lib',
                'src/lib/init.lib',
                'src/lib/swiper-outro.lib',
                'src/lib/swiper-proto.lib',
            ],
            pkg: require('./bower.json'),
            banner: [
                '/**',
                ' * Swiper <%= pkg.version %>',
                ' * <%= pkg.description %>',
                ' * ',
                ' * <%= pkg.homepage %>',
                ' * ',
                ' * Copyright <%= date.year %>, <%= pkg.author %>',
                ' * The iDangero.us',
                ' * http://www.idangero.us/',
                ' * ',
                ' * Licensed under <%= pkg.license.join(" & ") %>',
                ' * ',
                ' * Released on: <%= date.month %> <%= date.day %>, <%= date.year %>',
                ' */',
                ''].join('\n'),
            date: {
                year: new Date().getFullYear(),
                month: ('January February March April May June July August September October November December').split(' ')[new Date().getMonth()],
                day: new Date().getDate()
            }
        };

    function addJSIndent (file, t, minusIndent) {
        var addIndent = '        ';
        var filename = file.path.split('src/lib/')[1];
        if (['wrap-start.lib', 'wrap-start-umd.lib', 'wrap-end.lib', 'wrap-end-umd.lib', 'amd.lib'].indexOf(filename) !== -1) {
            addIndent = '';
        }
        if (filename === 'swiper-intro.lib' || filename === 'swiper-intro-f7.lib' || filename === 'swiper-outro.lib' || filename === 'dom.lib' || filename === 'get-dom-lib.lib' || filename === 'get-jquery.lib' || filename === 'dom-plugins.lib' || filename === 'swiper-proto.lib') addIndent = '    ';
        if (minusIndent) {
            addIndent = addIndent.substring(4);
        }
        if (addIndent !== '') {
            var fileLines = fs.readFileSync(file.path).toString().split('\n');
            var newFileContents = '';
            for (var i = 0; i < fileLines.length; i++) {
                newFileContents += addIndent + fileLines[i] + (i === fileLines.length ? '' : '\n');
            }
            file.contents = new Buffer(newFileContents);
        }
    }
    gulp.task('scripts', function (cb) {
        gulp.src(swiper.jsFiles)
            .pipe(tap(function (file, t){
                addJSIndent (file, t);
            }))
            .pipe(sourcemaps.init())
            .pipe(concat(swiper.filename + '.lib'))
            .pipe(header(swiper.banner, { pkg : swiper.pkg, date: swiper.date } ))
            .pipe(jshint())
            .pipe(jshint.reporter(stylish))
            .pipe(sourcemaps.write('./maps/'))
            .pipe(gulp.dest(paths.build.scripts));

            
        gulp.src(swiper.jQueryFiles)
            .pipe(tap(function (file, t){
                addJSIndent (file, t);
            }))
            .pipe(sourcemaps.init())
            .pipe(concat(swiper.filename + '.jquery.lib'))
            .pipe(header(swiper.banner, { pkg : swiper.pkg, date: swiper.date } ))
            .pipe(sourcemaps.write('./maps/'))
            .pipe(gulp.dest(paths.build.scripts));
        gulp.src(swiper.jQueryUMDFiles)
            .pipe(tap(function (file, t){
                addJSIndent (file, t);
            }))
            .pipe(sourcemaps.init())
            .pipe(concat(swiper.filename + '.jquery.umd.lib'))
            .pipe(header(swiper.banner, { pkg : swiper.pkg, date: swiper.date } ))
            .pipe(sourcemaps.write('./maps/'))
            .pipe(gulp.dest(paths.build.scripts));
        gulp.src(swiper.Framework7Files)
            .pipe(tap(function (file, t){
                addJSIndent (file, t, true);
            }))
            .pipe(sourcemaps.init())
            .pipe(concat(swiper.filename + '.framework7.lib'))
            .pipe(header(swiper.banner, { pkg : swiper.pkg, date: swiper.date } ))
            .pipe(sourcemaps.write('./maps/'))
            .pipe(gulp.dest(paths.build.scripts))
            .pipe(connect.reload());
        cb();
    });
    gulp.task('styles', function (cb) {

        gulp.src(paths.source.styles + 'swiper.less')
            .pipe(less({
                paths: [ path.join(__dirname, 'less', 'includes') ]
            }))
            .pipe(header(swiper.banner, { pkg : swiper.pkg, date: swiper.date }))
            .pipe(rename(function(path) {
                path.basename = swiper.filename;
            }))
            .pipe(gulp.dest(paths.build.styles))
            .pipe(connect.reload());

        gulp.src([
                paths.source.styles + 'core.less',
                paths.source.styles + 'navigation-f7.less',
                paths.source.styles + 'effects.less',
                paths.source.styles + 'scrollbar.less',
                paths.source.styles + 'preloader-f7.less',
            ])
            .pipe(concat(swiper.filename + '.framework7.less'))
            .pipe(header('/* === Swiper === */\n'))
            .pipe(gulp.dest(paths.build.styles));
        cb();
    });
    gulp.task('build', ['scripts', 'styles'], function (cb) {
        cb();
    });

    gulp.task('dist', function () {
        gulp.src([paths.build.scripts + swiper.filename + '.lib'])
            .pipe(gulp.dest(paths.dist.scripts))
            .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(header(swiper.banner, { pkg : swiper.pkg, date: swiper.date }))
            .pipe(rename(function(path) {
                path.basename = swiper.filename + '.min';
            }))
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest(paths.dist.scripts));

        gulp.src([paths.build.scripts + swiper.filename + '.jquery.lib'])
            .pipe(gulp.dest(paths.dist.scripts))
            .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(header(swiper.banner, { pkg : swiper.pkg, date: swiper.date } ))
            .pipe(rename(function(path) {
                path.basename = swiper.filename + '.jquery.min';
            }))
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest(paths.dist.scripts));

        gulp.src([paths.build.scripts + swiper.filename + '.jquery.umd.lib'])
            .pipe(gulp.dest(paths.dist.scripts))
            .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(header(swiper.banner, { pkg : swiper.pkg, date: swiper.date } ))
            .pipe(rename(function(path) {
                path.basename = swiper.filename + '.jquery.umd.min';
            }))
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest(paths.dist.scripts));

        gulp.src(paths.build.styles + '*.css')
            .pipe(gulp.dest(paths.dist.styles))
            .pipe(minifyCSS({
                advanced: false,
                aggressiveMerging: false,
            }))
            .pipe(header(swiper.banner, { pkg : swiper.pkg, date: swiper.date }))
            .pipe(rename(function(path) {
                path.basename = swiper.filename + '.min';
            }))
            .pipe(gulp.dest(paths.dist.styles));
    });

    gulp.task('watch', function () {
        gulp.watch(paths.source.scripts, [ 'scripts' ]);
        gulp.watch(paths.source.styles + '*.less', [ 'styles' ]);
    });

    gulp.task('connect', function () {
        return connect.server({
            root: [ paths.root ],
            livereload: true,
            port:'3000'
        });
    });

    gulp.task('open', function () {
        return gulp.src(paths.playground.root + 'index.html').pipe(open({ uri: 'http://localhost:3000/' + paths.playground.root + 'index.html'}));
    });

    gulp.task('server', [ 'watch', 'connect', 'open' ]);

    gulp.task('default', [ 'server' ]);
})();
