var apps = new Apps([{name: "Playlist Me", creator: "Coleman Foley", url: "http://playlist-me.meteor.com"}, 
				 {name: "Instahood"}, {name: "Routrrr"}, {name: "Defacebook"}, {name: "Rooms"}]);
var mainView = new MainView({collection: apps});

$(document).ready(function(){
  mainView.$el.appendTo(document.body);
});
