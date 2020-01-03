import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload'
import minify from 'rollup-plugin-babel-minify';

const serveopts = {
    contentBase: ['./public'],
    host: '0.0.0.0',
    port: 5000,
    allowCrossOrigin: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };

export default {
    input: 'src/index.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
    },
    plugins: [
        serve(serveopts),
        livereload(),
        minify( {
            // Options for babel-minify.
        } )
      ]
};