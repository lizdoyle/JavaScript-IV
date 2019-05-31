/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// IMPORTED CODE FROM JS III BELOW FOR REFRACTORING TO ES6

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// initial object with this attributes

// ES5
// function GameObject(attributes) {
//     this.createdAt = attributes.createdAt;
//     this.name = attributes.name;
//     this.dimensions = attributes.dimensions;
    
//   }

class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
        
      }
// converted prototype to a method inside the class
      destroy() {
        return `${this.name} was removed from the game.`;
      };

    }
  
  // prototype for GameObject for saved reassignment
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;
//   };
  
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
  // introduce health CHILD element
  
//   ES5
//   function CharacterStats(attributes) {
//     GameObject.call(this, attributes);
//     this.healthPoints = attributes.healthPoints;
    
//   }
  
  class CharacterStats extends GameObject{
      constructor(attributes) {
    // GameObject.call(this, attributes);
    super(attributes);
    this.healthPoints = attributes.healthPoints;
      }

      // converted prototype to a method inside the class
     takeDamage() {
        return `${this.name} took damage.`;
      };
  }
  // assign object.create from parent element for continued use of saved prototype
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
  // CharacterStats.prototype.constructor = CharacterStats;
  
//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`;
//   };
  
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
//   function Humanoid(attributes) {
//     CharacterStats.call(this, attributes);
//     this.team = attributes.team;
//     this.weapons = attributes.weapons;
//     this.language = attributes.language;
    
//   }

class Humanoid extends CharacterStats{
    constructor(attributes){
    // CharacterStats.call(this, attributes);
    super(attributes);
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
    }

      // converted prototype to a method inside the class
    
   greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
      }; 

  }
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}.`;
//   }; 
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
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
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
