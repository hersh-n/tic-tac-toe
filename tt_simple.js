$(document).ready(function() {
	var winningCombos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[3,5.7],[1,5,9]]
	var turn = 1;
	var xMoves = []


	$('td').on('click', function() {

		if (turn % 2 === 0) {
			$(this).html('X');
			xMoves.push(parseInt($(this).attr('id')))
		} else {
			$(this).html('O');
		}
		checkForWinner()
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

	function checkForWinner() {
		$.each(winningCombos, function() {
			$('#' + this[0]) == $('#' + this[1]) == "X"
			});
		}




		//
		//get every single element in the array
		//



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