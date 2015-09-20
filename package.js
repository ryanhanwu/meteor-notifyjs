Package.describe({
	name: 'ryanwu:meteor-notefyjs',
	version: '0.1.0',
	// Brief, one-line summary of the package.
	summary: 'A jQuery plugin to provide simple yet fully customisable notifications.',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/ryanhanwu/meteor-gridstack.git',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.3');
	api.use('jquery', 'client');
	api.add_files('lib/gridstack.js/dist/gridstack.min.css', 'client');
	api.add_files('lib/gridstack.js/dist/gridstack-extra.min.css', 'client');
	api.add_files('lib/gridstack.js/dist/gridstack.min.js', 'client');
});