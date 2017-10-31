const traits = [
    {"name": "ambush",
    "prefixes": ["ninja"],
    "suffixes": ["lurker"]},
    
    {"name": "body-size",
    "prefixes": ["mega"],
    "suffixes": ["normous"]},
    
    {"name": "burrowing",
    "prefixes": ["diggo"],
    "suffixes": ["digger"]},
    
    {"name": "carnivore",
    "prefixes": ["chompa"],
    "suffixes": ["nom-nom"]},
    
    {"name": "climbing",
    "prefixes": ["ascendo"],
    "suffixes": ["riser"]},
    
    {"name": "cooperation",
    "prefixes": ["collaba"],
    "suffixes": ["pate"]},
    
    {"name": "defensive-herding",
    "prefixes": ["flocka"],
    "suffixes": ["mob"]},
    
    {"name": "fat-tissue",
    "prefixes": ["lardo"],
    "suffixes": ["chunk"]},
    
    {"name": "fertile",
    "prefixes": ["playa", "friggin"],
    "suffixes": ["dado", "stuffer"]},
    
    {"name": "foraging",
    "prefixes": ["grubbo"],
    "suffixes": ["nibble"]},
    
    {"name": "hard-shell",
    "prefixes": ["hardi"],
    "suffixes": ["dillo"]},
    
    {"name": "horns",
    "prefixes": ["loki"],
    "suffixes": ["prick"]},
    
    {"name": "intelligence",
    "prefixes": ["smarti"],
    "suffixes": ["geek"]},
    
    {"name": "long-neck",
    "prefixes": ["extendo"],
    "suffixes": ["stretcher"]},
    
    {"name": "symbiosis",
    "prefixes": ["protecto"],
    "suffixes": ["shield"]},
    
    {"name": "pack-hunting",
    "prefixes": ["swarma"],
    "suffixes": ["crew"]},
    
    {"name": "population",
    "prefixes": ["plenti"],
    "suffixes": ["peeps"]},
    
    {"name": "scavenger",
    "prefixes": ["vultu"],
    "suffixes": ["scrounger"]},
    
    {"name": "warning-call",
    "prefixes": ["alerta"],
    "suffixes": ["caw-caw"]}
  ]
  
let mySpecies = [];
let myName = "My Species";

// return a random value from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getTraitObj(card) {
  for ( let i = 0; i < traits.length; i++ ) {
    if (card.id == traits[i].name) {
      return traits[i]; 
    } 
  }
}


// Populates and depopulates the mySpecies array and adds styling to selected traits
function toggleTrait(self, id) {
  const card = self;
  const trait = getTraitObj(card);

  if (mySpecies.indexOf(trait) < 0 ) { //The trait is not in mySpecies
    if (mySpecies.length < 3) {
      mySpecies.push(trait); // Add the trait object to mySpecies
      card.classList.add('selected'); // Add the selected class to the card
      if (trait.name == 'carnivore') {
        let bark = document.getElementById('bark').play();
      }
      makeName();
    } else {
      return;
    }
  } else { // The trait is already in mySpecies
    for ( let i = 0; i < mySpecies.length; i++ ) {
      if (card.id == mySpecies[i].name) {
        mySpecies.splice(i,1);  // Remove the trait object from mySpecies
      }
    }
    card.classList.remove('selected'); // Remove the selected class from the card
    makeName();
  }
}

// Loops through mySpecies, grabbing all possible prefixes and suffixes and randomly puts them together to create the name
function makeName() {
  let prefixArr = [];
  let suffixArr = [];
  let name;

  if (mySpecies.length < 1) return; // Don't make a name if there are no traits
  // Populate the prefix and suffix arrays
  for ( let i = 0; i < mySpecies.length; i ++ ) {
    for ( let j = 0; j < mySpecies[i].prefixes.length; j ++ ) {
      prefixArr.push(mySpecies[i].prefixes[j]);
    }
    for ( let k = 0; k < mySpecies[i].suffixes.length; k ++ ) {
      suffixArr.push(mySpecies[i].suffixes[k]);
    }
  }
  // Get random values from the prefix and suffix arrays
  let pre1 = getRandom(prefixArr);
  let pre2;
  let suf = getRandom(suffixArr);
  if (mySpecies.length <= 2) {
    name = pre1 + suf;
  } else {
    let pre2 = getRandom(prefixArr);
    // Ensure unique prefixes
    while ( pre2 == pre1 ) {
      pre2 = getRandom(prefixArr);
    }
    name = pre1 + pre2 + suf;
  }
  name = name.charAt(0).toUpperCase() + name.slice(1);
  document.getElementById("name").innerHTML = name;
}

