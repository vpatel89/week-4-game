$(document).ready(function(){

	var fighters = {
		luke : {
			name: "Luke Skywalker",
			hp: 100,
			attack: 20,
		},
		yoda : {
			name: "Yoda",
			hp: 150,
			attack: 10,
		},
		vader : {
			name: "Darth Vader",
			hp: 250,
			attack: 50,
		},
		maul : {
			name: "Darth Maul",
			hp: 200,
			attack: 30,
		}
	}

	var userCharacter;
	var defenderCharacter;
	var defenderName;
	var defenderAttack;
	var userAttack;
	var defenderHP;
	var userHP;


	$('.character').on('click', function() {
		userCharacter = (this.id);
		$(this).remove().appendTo('.you');
		$(this).removeClass('character');
		$('.character').remove().appendTo('.enemies');
	});

	$('.enemies').on('click', 'div', function() {
		defenderCharacter = (this.id);
		$(this).remove().appendTo('.defender');
		$('.enemies').off('click'); 
	});


	$('#attack').on('click', function() {
		if (defenderCharacter = 'luke') {
			var defenderName = fighters.luke.name;
			var defenderAttack = fighters.luke.attack;
			var defenderHP = fighters.luke.hp;
		} else if (defenderCharacter = 'yoda') {
			var defenderName = fighters.yoda.name;
			var defenderAttack = fighters.yoda.attack;
			var defenderHP = fighters.yoda.hp;
		} else if (defenderCharacter = 'vader') {
			var defenderName = fighters.vader.name;
			var defenderAttack = fighters.vader.attack;
			var defenderHP = fighters.vader.hp;
		} else if (defenderCharacter = 'maul') {
			var defenderName = fighters.maul.name;
			var defenderAttack = fighters.maul.attack;
			var defenderHP = fighters.maul.hp;
		}

		if (userCharacter = 'luke') {
			var userAttack = fighters.luke.attack;
			var userHP = fighters.luke.hp;
		} else if (userCharacter = 'yoda') {
			var userAttack = fighters.yoda.attack;
			var userHP = fighters.yoda.hp;
		} else if (userCharacter = 'vader') {
			var userAttack = fighters.vader.attack;
			var userHP = fighters.vader.hp;
		} else if (userCharacter = 'maul') {
			var userAttack = fighters.maul.attack;
			var userHP = fighters.maul.hp;
		}

		var userAttack = userAttack + userAttack;
		var defenderHP = defenderHP - userAttack;
		var userHP = userHP - defenderAttack;

		if (userHP <= 0) {
			alert('You Lose');
		} else if (defenderHP <= 0) {
			alert('You Win');
		}

		document.querySelector('#fightLog').innerHTML = "You have attacked " + defenderName + " for " 
			+ userAttack + " damage. " + defenderName + " attacked you back for " + defenderAttack 
			+ " damage.";
	});

	document.querySelector('#lukeHP').innerHTML = fighters.luke.hp + " HP";
	document.querySelector('#yodaHP').innerHTML = fighters.yoda.hp + " HP";
	document.querySelector('#vaderHP').innerHTML = fighters.vader.hp + " HP";
	document.querySelector('#maulHP').innerHTML = fighters.maul.hp + " HP";

});