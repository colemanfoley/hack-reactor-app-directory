var App = Backbone.Model.extend({
	defaults: {
		"url": "",
		"creator": "N/A"
	}
});

var Apps = Backbone.Collection.extend({model: App});
