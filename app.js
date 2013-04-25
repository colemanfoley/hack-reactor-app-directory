var apps = new Apps({});
apps.add([{name: "Playlist Me", creator: "Coleman Foley", url: "http://playlist-me.meteor.com"}, 
				 {name: "Instahood"}, {name: "Routrrr"}]);
var mainView = new MainView({collection: apps});

$(document).ready(function(){
  mainView.$el.appendTo(document.body);
});
