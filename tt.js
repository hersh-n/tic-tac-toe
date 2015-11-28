$(document).ready(function() {
	var winningCombos = [[1,2,3],[4,5,6]]
	var turn = 1;
	var xMoves = []
	var permutation = []
	var usedChars = []

		function permutator(xMoves) {
			var i ;
			var ch ;
			for(i = 0; i < input.length; i++){
				ch = input.splice(i, 1)[0];
				usedChars.push(ch);
				if (input.length == 0) {
					permutation.push(usedChars.slice());

				}
				permutator(input);
				input.splice(i,0,ch);
				usedChars.pop();
			}

			return permutation
		};


	$('td').on('click', function() {

		if (turn % 2 === 0) {
			$(this).html('X');
			xMoves.push(parseInt($(this).attr('id')))
		} else {
			$(this).html('O');
		}
		checkForWinner(permutation)
		$(this).off('click')
		turn++;
	});

	// function checkForWinner() {
	// 	var sum = 0
	// 	for  (var i = 0; i < xMoves.length; i++){
	// 		sum = sum + xMoves[i]
	// 	}
	// 	if (sum / xMoves.length == 15) {
	// 		document.write("X wins")
 // 		}
	// };

	function checkForWinner(input) {
		var total = 0
		var eachTotal = []
		for(i = 0; i < input.length; i++){
		$.each(permutation[i], function() {
			total += this;
			//eachTotal.push(total)
		});
    }
    if(total / input.length == 15)
    	document.write("X wins")
    return total
	}


});



// winner



//min 3 max five to check for winner



// 	var idToString = ($((this).xMoves).attr('id'))
// 	var stringToInt = parseInt(idToString)
// 	var xMovesInt = []
// 	stringToInt.push(xMovesInt)
// }



// whenever an x is put in a block convert the id to a number
// store it in an array

// look through every selected square with an x
// 	if any combination of 3 squares = 15
// 		print x wins

// if x holds three squares that equal to 15 x wins
// if o holds three squares that equal to 15 x wins


// if line = 15 all O or X