var AppView = Backbone.View.extend({
	model: App,
	tagName: "div",
	className: "app",

	render: function  (argument) {
		var compiled = _.template('<h3><a href=""></a><%= name %></h3>');
		compiled({name : this.model.get("name")});
		this.$el.html(compiled({name : this.model.get("name")}));
		this.$el.append(this.model.get("creator"));
		return this.$el;
	}
});