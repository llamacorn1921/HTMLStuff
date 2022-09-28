const UglifyJS = require("uglify-js");

const fs = require("fs");
const path = require("path");

const source = "src/";
const build = "build/";


const config = {
	parse: {
		// parse options
	},
	/** @type {UglifyJS.CompressOptions} */
	compress: {
		// compress options
		drop_debugger: false,
		global_defs: {

		},
		pure_funcs: [],
		
	},
	/** @type {UglifyJS.MangleOptions} */
	mangle: {
		// mangle options
		reserved: [ ],
		properties: {
			reserved: []
		}
	},
	/** @type {UglifyJS.OutputOptions} */
	output: {
		// output options,
		comments: /^!/,
		beautify: false,
		braces: true,
		quote_style: 2,
		
	},
	sourceMap: {
		// source map options
	},
}

const buildProject = () => {
	fs.readdir('./src', (err, files) => {
		if (err) {
			console.log(err);
		};

		files.forEach((file) => {
			fs.writeFileSync(`./build/${path.parse(file).name}.min.js`, UglifyJS.minify({
				file: fs.readFileSync(`./src/${file}`, "utf8")
			}, config).code, "utf8");
			console.log(file);
		});
	});
}
buildProject();