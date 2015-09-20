Package.describe({
	name: 'ryanwu:meteor-notifyjs',
	version: '0.1.0',
	// Brief, one-line summary of the package.
	summary: 'A simple, versatile jQuery notification library',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/ryanhanwu/meteor-notifyjs.git',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.3');
	api.use('jquery', 'client');
  api.add_files('lib/notifyjs/dist/notify-combined.min.js', 'client');
});
