$(document).ready(function(){
  var options = { //reset options as specified
    frequency: 15,
    limit: 5
  };

  poller = new window.massrel.Poller(options, function(bandlist) {
    $(".bandlist li").remove();  
    
    // toLocaleString only seems to work on Chrome; another method to solve this would be using regex
    // .clear applies the clear:both fix
    bandlist.forEach(function(band){
      $(".bandlist").append("\
        <li class='band'>\
          <h3 class='band-name'>" + band.name + "</h3>\
          <span class='band-mentions'>\
            <span class='band-num'>" + band.count.toLocaleString() + "</span> &nbsp;Mentions\
          </span>\
          <div class='clear'></div>\
        </li>\
    ")});
    
  	$('.band-name').delay(14000).fadeOut(1000); //an extra credit fadeOut
    $('.band-num').delay(14000).fadeOut(1000);
    
  });

  poller.start();
});
