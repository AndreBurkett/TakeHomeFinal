var AI = {
  show: function(style){
    //var mu = "<div class='fadeBox'> <div class='spinner'> </div> </div>";
	var mu = "<div class='fadeBox'> <div class='"+ style +"'> </div>";
	//mu += "<div class='hideBox'>"
	mu += "<a href='javascript:AI.hide()' class='hideLink'  id=''> Hide </a>";
	//mu += "</div>"
	mu += "</div>"
    document.body.innerHTML += mu;
  },
  hide: function(){
    $(".fadeBox").remove();
  }
}
