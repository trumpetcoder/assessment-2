// Linked JS page
// Checked and working


// Added keydown function move for top player keydown == 39 is right arrow
$(document).keydown(function(move) {
    if(move.keyCode == 39) {
        $('#p1').animate({marginLeft: "+=10" });
    }
});

// Added keydown function for bottom player keydown == 68 is D
$(document).keydown(function(move) {
    if(move.keyCode == 68) {
        $('#p2').animate({marginLeft: "+=10" });
    }
});