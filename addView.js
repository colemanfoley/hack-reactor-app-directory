var AddView = Backbone.View.extend({
	id: "addContainer",
	initialize: function(){
		$(document).keypress(function(e) {
	    if((e.which == 13) && $('#creatorInput').is(':focus') && $('#nameInput').val()){
	      apps.add({
	      	name: $('#nameInput').val(),
	      	creator: $('#creatorInput').val(),
	      	url: "http://" + $('#urlInput').val()
	      });
	    }
		});
	},
  render: function(){
		this.$el.html('<h1>Made At Hack Reactor</h1>');
		var formHTML = '<form id="addApp" name="addApp">' +
			'<input id="nameInput" placeholder="Name of the app">' +
			'<input id="urlInput" placeholder="URL of the app">' +
			'<input id="creatorInput" placeholder="Creator of the app">' +
			'</form>';

		this.$el.append(formHTML);
    return this.$el;
  }
});
