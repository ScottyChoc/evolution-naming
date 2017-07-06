var traits = {
  'ambush': { prefixes: ['ninja'],
              suffixes: ['lurker'] },
  'bodySize': { prefixes: ['mega'],
              suffixes: ['normous'] },
  'burrowing': { prefixes: ['diggo'],
              suffixes: ['digger'] },
  'carnivore': { prefixes: ['chompa'],
              suffixes: ['nom-nom'] },
  'climbing': { prefixes: ['ascendo'],
              suffixes: ['riser'] },
  'cooperation': { prefixes: ['collaba'],
              suffixes: ['pate'] },
  'defensiveHerding': { prefixes: ['flocka'],
              suffixes: ['mob'] },
  'fatTissue': { prefixes: ['lardo'],
              suffixes: ['chunk'] },
  'fertile': { prefixes: ['playa'],
              suffixes: ['dado'] },
  'foraging': { prefixes: ['grubbo'],
              suffixes: ['nibble'] },
  'hardShell': { prefixes: ['hardi'],
              suffixes: ['dillo'] },
  'horns': { prefixes: ['loki'],
              suffixes: ['prick'] },
  'intelligence': { prefixes: ['smarti'],
              suffixes: ['geek'] },
  'longNeck': { prefixes: ['extendo'],
              suffixes: ['stretcher'] },
  'symbiosis': { prefixes: ['protecto'],
              suffixes: ['shield'] },
  'packHunting': { prefixes: ['swarma'],
              suffixes: ['crew'] },
  'population': { prefixes: ['plenti'],
              suffixes: ['peeps'] },
  'scavenger': { prefixes: ['vultu'],
              suffixes: ['scrounger'] },
  'warningCall': { prefixes: ['alerta'],
              suffixes: ['caw-caw'] },
}

var mySpecies = [];



// return a random value from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Evolution is always left to chance
function cointoss() {
  var heads = true,
      tails = false;
  return getRandom([heads, tails])
}

function makeName(traitsArr) {
  // var speciesTraits = []; // create a view of the traits

  // Create arrays for possible prefixes and suffixes
  var prefixArr = [];
  var suffixArr = [];

  if ( traitsArr.length > 0 ) {
    for ( i = 0; i < traitsArr.length; i++ ) {
      // iterate through each species' prefix array in case of new prefixes from user
      console.log('i: ' + i);
      for ( j = 0; j < traitsArr[i].prefixes.length; j++ ) {
        prefixArr.push(traitsArr[i].prefixes[j]);
      }

      // iterate through each species' suffix array in case of new suffixes from user
      for ( k = 0; k < traitsArr[i].suffixes.length; k++ ) {
        suffixArr.push(traitsArr[i].suffixes[k]);
      }
    }


    var pre1 = getRandom(prefixArr);
    var pre2 = getRandom(prefixArr);
    // Ensure unique prefixes
    while ( pre2 == pre1 ) {
      pre2 = getRandom(prefixArr);
    }
    var suf = getRandom(suffixArr);
    // A species can still have a single prefix even if there are more than 2 traits
    if (cointoss()) {
      var nameLower = pre1 + pre2 + suf;
    } else {
      var nameLower = pre1 + suf;
    }
    var nameUpper = nameLower.charAt(0).toUpperCase() + nameLower.slice(1);
    return nameUpper;
  } else {
    return 'no traits';
  }
}

function toggleTrait(self, id) {
  var card = self;
  if ( mySpecies.length < 3 ) {
    card.classList.toggle('selected');




    if ( !mySpecies.includes(card.id) ) {

      for (var prop in traits) {
        if (card.id == prop) {
          console.log('match! ' + prop);
          var innerObj = {};
          innerObj[prop] = traits[prop]

          mySpecies.push(innerObj);
        }
      }

      console.log(mySpecies);
      // console.log('Name: ' + makeName(mySpecies));


    } else {
      console.log('You already selected that trait');
      return;
      // TODO: Remove this trait from array
    }
  } else {
    console.log('You cannot have more than 3 traits');
    return;
  }

  // console.log('Name: ' + makeName(mySpecies));
  return;
}

// Add new prefixes and suffixes to existing traits
// traits.ambush.prefixes.push('super');
// traits.ambush.suffixes.push('noodle');


