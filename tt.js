$(document).ready(function() {
	var winningCombos = [[1,2,3],[4,5,6]]
	var turn = 1;
	var xMoves = []
	var permutation = []
	var usedChars = []

		function permutator(array) {
			var i ;
			var ch ;
			for(i = 0; i < array.length; i++){
				ch = array.splice(i, 1)[0];
				usedChars.push(ch);
				if (array.length == 0) {
					permutation.push(usedChars.slice());

				}
				permutator(array);
				array.splice(i,0,ch);
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
		permutator(xMoves)
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

	function checkForWinner(arrayOfMoves) {

		var total = 0;
		var eachTotal = [];
		for(i = 0; i < arrayOfMoves.length; i++){
				total = arrayOfMoves[i].reduce(function(a, b) {
					return a + b;
				});
				eachTotal.push(total);
		}
		for(i = 0; i < eachTotal.length; i++){
    	if(eachTotal[i] == 15){
    	window.alert("X wins");
    }
  }
    return eachTotal;
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