var MainView = Backbone.View.extend({
	id: "container",
	collection: Apps,
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.html("<h1>Made At Hack Reactor</h1>");
		this.collection.each(function(app){
			this.$el.append(new AppView({model: app}).render());
		}, this);
	}
});
