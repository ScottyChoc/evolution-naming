var traits = [
	['ambush', ['ninja'], ['lurker']],
	['bodySize', ['mega'], ['normous']],
	['burrowing', ['diggo'], ['digger']],
	['carnivore', ['chompa'], ['nom-nom']],
	['climbing', ['ascendo'], ['riser']],
	['cooperation', ['collaba'], ['pate']],
	['defensiveHerding', ['flocka'], ['mob']],
	['fatTissue', ['lardo'], ['chunk']],
	['fertile', ['playa'], ['dado']],
	['foraging', ['grubbo'], ['nibble']],
	['hardShell', ['hardi'], ['dillo']],
	['horns', ['loki'], ['prick']],
	['intelligence', ['smarti'], ['geek']],
	['longNeck', ['extendo'], ['stretcher']],
	['symbiosis', ['protecto'], ['shield']],
	['packHunting', ['swarma'], ['crew']],
	['population', ['plenti'], ['peeps']],
	['scavenger', ['vultu'], ['scrounger']],
	['warningCall', ['alerta'], ['caw-caw']]];

function getRandom(arr) {
	// return a random value from an array
	return arr[Math.floor(Math.random() * arr.length)]
}

function cointoss() {
	// Evolution is always left to chance
	var heads = true,
			tails = false;
	return getRandom([heads, tails])
}

function makeName() {
	var speciesTraits = [];
	// Create arrays for possible prefixes and suffixes
	var prefixArr = [];
	var suffixArr = [];
	for ( i = 0; i < arguments.length; i++ ) {
		speciesTraits.push(arguments[i][0]);
		// iterate through each species' prefix array in case of new prefixes from user
		for ( j = 0; j < arguments[i][1].length; j++ ) {
			prefixArr.push(arguments[i][1][j]);
		}
		// iterate through each species' suffix array in case of new suffixes from user
		for ( k = 0; k < arguments[i][2].length; k++ ) {
			suffixArr.push(arguments[i][2][k]);
		}
	}
	var pre1 = getRandom(prefixArr);
	var pre2 = getRandom(prefixArr);
	// Ensure unique prefixes
	while ( pre2 == pre1 ) {
		pre2 = getRandom(prefixArr);
	}
	var suf = getRandom(suffixArr);
	// Leave a chance for single prefix even if there are more traits
	if (cointoss()) {
		var nameLower = pre1 + pre2 + suf;
	} else {
		var nameLower = pre1 + suf;
	}
	var nameUpper = nameLower.charAt(0).toUpperCase() + nameLower.slice(1);
	return [speciesTraits, nameUpper];
}

function makeRandomSpecies(arr) {
	var traitsArr = [];
	var traitNames = ""
	for ( i = 0; i < 3; i++ ) {
	traitsArr.push(getRandom(arr));
		for ( i = 0; i < traitsArr.length; i++ ) {
			
		}
	}
	return newTraits;
}

// Add new prefixes and suffixes to existing traits
traits[0][1].push('super');
traits[5][2].push('noodle');

var species = makeName(traits[0], traits[5], traits[4]);

console.log('Traits: ' + species[0] + '\n' + 'Name: ' + species[1]);

console.log(makeRandomSpecies(traits));
