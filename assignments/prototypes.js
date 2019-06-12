/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/
  
/*
  === GameObject ===
  * createdAtd
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(attributes) {
  
  // Date() is the current time 
  this.createdAt = attributes.createdAt; 

  // name in attributes object = this.name 
  this.name = attributes.name; 

  // dimensions in attributes object = this.dimensions 
  this.dimensions = attributes.dimensions; 
}

// Creates a function for GameObject usage 
GameObject.prototype.destroy = function() {

  // Returns the name of the person who has been removed. Does nto change the object 
  return `${this.name} was removed from the game.`; 
}



/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(attributes) {

  // Allows for inheritance of everything within GameObject 
  GameObject.call(this, attributes); 

  // new assignments for CharacterStats 
  this.healthPoints = attributes.healthPoints; 
}

// Allows inheritance of GameObject function 
CharacterStats.prototype = Object.create(GameObject.prototype); 

// Creates a function for CharacterStats usage 
CharacterStats.prototype.takeDamage = function () {

  // Returns name + took damage, but does not affect the health points of the object 
  return `${this.name} took damage.`
}; 



/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(attributes) {

  // Allows inheritance of everything inside of CharacterStats  
  CharacterStats.call(this, attributes); 

  // new assignments for humanoid 
  this.team = attributes.team; 
  this.weapons = attributes.weapons; 
  this.language = attributes.language;
}

// Allows for inheritance of CharacterStats function 
Humanoid.prototype = Object.create(CharacterStats.prototype); 

// Creates a function for CharacterStats usage 
Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`
}
 


// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function. 

function Hero(attributes) {

  // Allows inheritance of everything inside of Humanoid   
  Humanoid.call(this, attributes); 

  this.damage = attributes.damage; 
}

// Allows for inheritance of Humanoid function 
Hero.prototype = Object.create(Humanoid.prototype); 

// deplete method removes health points from an object 
Hero.prototype.deplete = function (obj) {

  // subtract damage done from an object's health points 
  obj.healthPoints -= this.damage * 3; 

  // positive health points remaining 
  if (obj.healthPoints > 0) {
    return `${this.name} depleted ${this.damage * 3} health point(s) from ${obj.name}. You have ${obj.healthPoints} remaining.`
  }
  
  // zero or negative health points remaining 
  return `${this.name} killed ${obj.name}! ${obj.destroy()} Super Heroes Never Lose!`; 
}

function Villian(attributes) {

  // Allows inheritance of everything inside of Humanoid   
  Humanoid.call(this, attributes); 

  this.pain = attributes.pain; 
}

Villian.prototype = Object.create(Humanoid.prototype); 

// * Give the Villian methods that could be used to remove health points from objects 
Villian.prototype.hurt = function (obj) {
  
  // subtract damage done from an object's health points 
  obj.healthPoints -= this.pain; 

  if (obj.healthPoints > 0) {
    return `${obj.takeDamage()} ${this.name} depleted ${this.pain} health point(s) from ${obj.name}. You have ${obj.healthPoints} remaining.`
  }
  
  // health points <= 0 
  return `${this.name} killed ${obj.name}! ${obj.destroy()} Villians Reign Once Again!`; 
}



// Test you work by un-commenting these 3 objects and the list of console logs below: --- Done 

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

// hero 
const spongeBob = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 5,
    width: 3,
    height: 10,
  },
  healthPoints: 100,
  name: 'SpongeBob SquarePants',
  team: 'Super Hero',
  weapons: [
    'Bubbles',
    'Elastic Arms',
    'Patrick',
  ],
  language: 'Sponge and English',
  damage: 25,
});

// villian 
const plankton = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 5,
    height: 3,
  },
  healthPoints: 250,
  name: 'Plankton',
  team: 'Villian',
  weapons: [
    'Computer Wife',
    'Chum Bucket Food',
  ],
  language: 'Sponge and Fish',
  pain: 40,
});

  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
  console.log(spongeBob.name); // SpongeBob SquarePants 
  console.log(spongeBob.weapons); // [ 'Bubbles', 'Elastic Arms', 'Patrick', ]
  console.log(spongeBob.damage); // 25

  console.log(plankton.name); // Platon
  console.log(plankton.weapons); // [ 'Computer Wife', 'Chum Bucket Food', ]
  console.log(plankton.pain); // 40
  

  console.log(spongeBob.healthPoints); // 100
  
  // SpongeBob SquarePants took damage. Plankton depleted 40 health point(s) from SpongeBob SquarePants. You have 60 remaining.
  console.log(plankton.hurt(spongeBob)); 

  console.log(plankton.healthPoints); // 250 
  
  // SpongeBob SquarePants depleted 75 health point(s) from Plankton. You have 175 remaining.
  console.log(spongeBob.deplete(plankton)); 
  

  // Stretch task: --- COMPLETE 

  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function. 
  // --- DONE 
   
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0; --- DONE 

  // * Create two new objects, one a villain and one a hero and fight it out with methods! --- DONE 