$(document).ready(function() {
	var winningCombos = [[1,2,3],[4,5,6]]
	var turn = 1;
	var xMoves = []
	var oMoves = []
	var xPermutation = []
	var oPermutation = []
	var usedNum = []

		function permutator(array) {
			var i ;
			var num ;
			for(i = 0; i < array.length; i++){
				num = array.splice(i, 1)[0];
				usedNum.push(num);
				if (array.length == 0 && array == oMoves) {
					oPermutation.push(usedNum.slice());
				}
				else if(array.length == 0 && array == xMoves){
					xPermutation.push(usedNum.slice());
				}
				permutator(array);
				array.splice(i,0,num);
				usedNum.pop();
			}
			if (array == oMoves){
				return oPermutation
			}
			else if(array == oMoves){
				return xPermutation
			}
		};


	$('td').on('click', function() {

		if (turn % 2 === 0) {
			$(this).html('X');
			xMoves.push(parseInt($(this).attr('id')))
				if (turn > 4){
					permutator(xMoves)
					checkForWinner(xPermutation)
				}
		} else {
			$(this).html('O');
			oMoves.push(parseInt($(this).attr('id')))
				if (turn > 4){
					permutator(oMoves)
					checkForWinner(oPermutation)
				}
		}
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
			if(arrayOfMoves[i].length > 3){
				arrayOfMoves[i] = arrayOfMoves[i].slice(0, 3)
			}
				total = arrayOfMoves[i].reduce(function(a, b) {
					return a + b;
				});
				eachTotal.push(total);
		}
		console.log(eachTotal);
		for(i = 0; i < eachTotal.length; i++){
    	if(eachTotal[i] == 15 && arrayOfMoves == xPermutation){
    	window.alert("X wins");
    	window.location.reload();
    	winner = true
    	break;
    	}
	    else if(eachTotal[i] == 15 && arrayOfMoves == oPermutation){
	    	window.alert("O wins");
	    	window.location.reload();
	    	winner = true
	    	break;
	    }

  }
  	if(turn == 9 && winner == false){
	    	window.alert("Its a Tie")
	    	window.location.reload();

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