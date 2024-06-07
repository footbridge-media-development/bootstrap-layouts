const gulp = require('gulp');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const esbuild = require('gulp-esbuild');

// TypeScript project configuration
const tsProject = ts.createProject('tsconfig.json');

// TypeScript to JavaScript task
gulp.task('typescript', () => {
	return tsProject.src()
		.pipe(tsProject())
		.js.pipe(gulp.dest('js'));
});

// Babel transpile task
gulp.task('babel', () => {
	return gulp.src('js/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('js'));
});

// ESBuild bundle task
gulp.task('esbuild', () => {
	return gulp.src('js/**/*.js')
		.pipe(esbuild({
			outfile: 'footbridge.bundle.min.js',
			bundle: true,
			minify: true,
			platform: 'node'
		}))
		.pipe(gulp.dest('js'));
});

// Series of tasks
gulp.task('build', gulp.series('typescript', 'babel', 'esbuild'));
