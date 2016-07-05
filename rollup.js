
var rollup = require('rollup')

var builtins = require('rollup-plugin-node-builtins')
var include  = require('rollup-plugin-includepaths')
var resolve  = require('rollup-plugin-node-resolve')
var commonjs = require('rollup-plugin-commonjs')

var write = require('fs').writeFileSync

bundle()
.then(bundle =>
{
	console.log(bundle.code)
	write(__dirname + '/bundle.js', bundle.code)
},
error =>
{
	console.error(error)
})


function bundle ()
{
	var entry = 'buns/index/index.js'

	return rollup.rollup(
	{
		entry: entry,

		plugins:
		[
			builtins(),
			resolve(
			{
				jsnext:  false,
				browser: true
			}),
			commonjs(
			{
				sourceMap: false
			}),

			// (3) turning off include and comment (1) and (2) to stabilize
			/* 
			include(
			{
				paths: [ __dirname, __dirname + '/buns' ]
			})
			// */
		]
	})
	.then(bundle =>
	{
		return bundle.generate(
		{
			format: 'iife',
		})
	})
}
