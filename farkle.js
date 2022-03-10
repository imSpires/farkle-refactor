var diceArr = [];

function initializeDice(){
	for(i = 0; i < 6; i++){
		diceArr[i] = {};
		diceArr[i].id = "die" + (i + 1);
		diceArr[i].value = i + 1;
		diceArr[i].clicked = 0;
	}
}

/*Rolling dice values and updates images based on values */
function rollDice(){
	for(var i=0; i < 6; i++){
		
		if(diceArr[i].clicked === 0){
			diceArr[i].value = Math.floor((Math.random() * 6) + 1);
			var diceImage = "images/" + diceArr[i].value + ".png";
			document.getElementById(diceArr[i].id).setAttribute("src", diceImage);
		}
	}
	// console.log(diceArr);
}

function diceClick(img){
	var i = img.getAttribute("data-number");

	img.classList.toggle("transparent");
	if(diceArr[i].clicked === 0){
		diceArr[i].clicked == 1;
	}
	else{
		diceArr[i].clicked == 0;
	}

}

// calculate score when you press bank score
function bankScore(arr) {
	
	// variable for score
	var score = 0;

	// arr to store selected dice
	var selectedArr = [];

	// arr to store unselected dice
	var unusedArr = [];

	// variable to store farkle (if true you lose your turn and you score no points);
	var farkle = false;

	// Check if each dice in arr is selected by user
	for ( var i=0; i < arr.length; i++) {
		if (diceArr[i].clicked === 1) {
			// if it's selected put in selected arr
			selectedArr.push(diceArr[i].value);
			console.log(selectedArr);
		} else {
			// if not put in unused arr
			unusedArr.push(diceArr[i].value);
		}

	if ( selectedArr.includes(1) === true ) {
		score = score + 100;
	} else if ( selectedArr.includes(5) === true ) {
		score = score + 50;
	} else {
		break;
	}
	}


	// Switch statements 
	// Switch - if 1 item in arr
		// case - if its 1 add 100 points to score
		// case - if its 5 add 50 points to score
		// default - set farkle to true
	
	// Switch - if 2 item in arr
		// case - if it's 1,1 add 200 points to score
		// case - if it's 1,5 or 5,1 add 150 points to score
		// case if it's 5,5 add 100 points to score
		// default - set farkle to true
	
	// Switch - if 3 item in arr
		// case - check for 3 of the same number
			// if 3 1's - add 1000 to score
			// if 3 2's - add 200 to score
			// if 3 3's - add 300 to score
			// if 3 4's - add 400 to score
			// if 3 5's - add 500 to score
			// if 3 6's - add 600 to score
		// case - if it's 1,1,1 add 300 points to score
		// case if it's (1,1,5), (1,5,1), or (5,1,1) add 250 points to score
		// case if it's (5,5,1), (5,1,5), or (1,5,5) add 200 points to score
		// case if it's 5,5,5 add 150 points to score
		// default - set farkle to true

}

// Roll dice button functionality to randomize all 6 dice 
// consider dice scenarios
// Bank store button functionality to update score
// Save leftover dice
// Roll only leftover dice
// Add to score, repeat
// Add score chart to page/improve ui
// add favicon
// refactor html/css if necessary