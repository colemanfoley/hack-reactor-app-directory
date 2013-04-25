var AddView = Backbone.View.extend({
	id: "addContainer",
	initialize: function(){
		$(document).keypress(function(e) {
	    if((e.which == 13) && $('#inputApp').is(':focus') && $('#inputApp').val()){
	    	e.preventDefault();
	      apps.add({name: $('#inputApp').val()});
	    }
		});
	},
  render: function(){
		this.$el.html('<h1>Made At Hack Reactor</h1>');
		this.$el.append('<form>Add an app.<br><input id="inputApp"></form>');
    return this.$el;
  }
});