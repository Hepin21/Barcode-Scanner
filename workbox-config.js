module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{ico,png,html,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};