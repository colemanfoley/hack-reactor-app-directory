var AppView = Backbone.View.extend({
	model: App,
	tagName: "div",
	className: "app",

	render: function  (argument) {
		return this.$el.html(this.model.get("name"));
	}
});