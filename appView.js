var AppView = Backbone.View.extend({
	model: App,
	tagName: "div",
	className: "app",

	render: function  (argument) {
		var compiled = _.template('<h3><a href="<%= url %>"><%= name %></a></h3>');
		this.$el.html(compiled({name : this.model.get("name"), url: this.model.get("url")}));
		this.$el.append("Made by: ");
		this.$el.append(this.model.get("creator"));
		return this.$el;
	}
});
