// Linked JS page
// Checked and working


// Added keydown function move for top player
$(document).keydown(function(move) {
    if(move.keyCode == 39) {
        $('#topRacer').animate({marginLeft: "+=10" });
    }
});

// Added keydown function for bottom player
$(document).keydown(function(move) {
    if(move.keyCode == 68) {
        $('#botRacer').animate({marginLeft: "+=10" });
    }
});