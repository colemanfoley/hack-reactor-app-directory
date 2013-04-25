var MainView = Backbone.View.extend({
	id: "container",
	collection: Apps,
	initialize: function(){
		this.listenTo(this.collection, 'add', this.render);
		this.listenTo(this.collection, 'change', this.render);
		this.render();
	},
	render: function(){
		this.$el.html(new AddView().render());
		this.collection.each(function(app){
			this.$el.append(new AppView({model: app}).render());
		}, this);
	}
});
