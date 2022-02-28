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
	console.log(diceArr);

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

// Roll dice button functionality to randomize all 6 dice
// Assign score value to dice
// Bank store button functionality to update score
// Save score til page reload
// Add score chart to page/improve ui
// add favicon
// refactor html/css if necessary