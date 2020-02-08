$(document).keydown(function(e){
    switch (e.which){
    case 37:    //left arrow key
        $(".player1").finish().animate({
            left: "-=50"
        });
        break;
    case 38:    //up arrow key
        $(".player1").finish().animate({
            top: "-=50"
        });
        break;
    case 39:    //right arrow key
        $(".player1").finish().animate({
            left: "+=50"
        });
        break;
    case 40:    //bottom arrow key
        $(".player1").finish().animate({
            top: "+=50"
        });
        break;
    }
});