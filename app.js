var apps = new Apps({});
apps.add({name: "Playlist Me"});
var mainView = new MainView({collection: apps});

$(document).ready(function(){
  mainView.$el.appendTo(document.body);
});
