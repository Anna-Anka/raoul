import { plugins } from './gulp/plugins';

export const paths = {
    html: {
        src: './src/html/*.html',
        app: './app/',
        watch: './src/html/**/*.html',
    },
    styles: {
        src: './src/styles/style.{scss,sass,css}',
        app: './app/css/',
        watch: './src/styles/**/*.{scss,sass,css}',
    },
    scripts: {
        src: './src/js/main.js',
        app: './app/js/',
        watch: './src/js/**/*.js',
    },
    images: {
        src: [
            './src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}',
            '!./src/img/favicon/*',
        ],
        app: './app/img/',
        watch: './src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}',
    },
    avifWebp: {
        src: [
            './src/img/**/*.{jpg,jpeg,png,gif,tiff}',
            '!./src/img/favicon/*',
        ],
        app: './app/img/',
        watch: './src/img/**/*.{jpg,jpeg,png,gif,tiff}',
    },
    sprites: {
        src: './src/img/sprites/*.svg',
        app: './app/img/',
        watch: './src/img/sprites/*.svg',
    },
    fonts: {
        src: './src/fonts/**/*',
        app: './app/fonts/',
        watch: './src/fonts/**/*',
    },
    favicons: {
        src: './src/img/favicon/favicon.png',
        app: './app/img/favicons/',
    },
    devFolder: './src',
    productFolder: './app',
    rootFolder: plugins.path.basename(plugins.path.resolve()),
};

plugins.requireDir('./gulp-tasks');

export const development = plugins.gulp.series(
    'clean',
    plugins.gulp.parallel(['views', 'styles', 'scripts', 'images', 'avif', 'webp', 'sprites', 'fonts', 'favicons']),
    plugins.gulp.parallel('serve'),
);

export const build = plugins.gulp.series(
    'clean',
    plugins.gulp.parallel(['views', 'styles', 'scripts', 'images', 'avif', 'webp', 'sprites', 'fonts', 'favicons']),
);

export const buildImages = plugins.gulp.series('images', 'webp', 'avif');

export default development;
