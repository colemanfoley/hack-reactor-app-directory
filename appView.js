var AppView = Backbone.View.extend({
	model: App,
	tagName: "div",
	className: "app",

	render: function (argument) {
		var compiledWithoutURL = _.template('<h3><%= name %></h3>by <%= creator %>');
		var compiled = _.template('<h3><a href="<%= url %>"><%= name %></a></h3>by <%= creator %>');
		console.log(this.model.get("url"));
		if (!this.model.get("url")) {
			this.$el.html(compiledWithoutURL({name : this.model.get("name"),
				creator: this.model.get("creator")}));
		} else {
			this.$el.html(compiled({name : this.model.get("name"),
				url: this.model.get("url"), creator: this.model.get("creator")}));
		}

		return this.$el;
	}
});
