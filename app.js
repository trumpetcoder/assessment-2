// Linked JS page
// Checked and working

// Logic for the seperate racers to measure the distance from the edge
var redBox = $(window).width() - ($('#p1').offset().left + $('#p1').outerWidth());
var blueBox = $(window).width() - ($('#p2').offset().left + $('#p2').outerWidth());	

// Added keydown function move for top player keydown == 39 is right arrow
$(document).keydown(function(move) {
    if(move.keyCode == 39) {

    	// Movement functionality P1
        $('#p1').animate({left: '+=2vw'});
        // console.log($('#p1')[0].style.left);

        // Drilling down to find the distance p1 has moved setting a variable
        var goal = ($('#p1')[0].style.left);
       	
       	// parsing the goal variable and setting it to a new usable variable
       	var parseGoal = parseInt(goal);
       	
       	// console.log(parseGoal);

        // conditional to select p1 as winner
        if (parseGoal >= 93) {
			alert('Player 1 is Winner');

       } 	
    }
});

// Added keydown function for bottom player keydown == 68 is D
$(document).keydown(function(move) {
    if(move.keyCode == 68) {

    	// Movement functionality P2
        $('#p2').animate({left: '+=2vw' });

        // Drilling down to find the distance p1 has moved setting a variable
        var goal = ($('#p2')[0].style.left);

        // parsing the goal variable and setting it to a new usable variable
        var parseGoal = parseInt(goal);

        // console.log(parseGoal);

         // conditional to select p1 as winner
   	    if (parseGoal >= 93) {
			alert('Player 2 is Winner');	 
        
        }
        
    }
});

 




