'use strict';

// Character Class definition
class Character {
  constructor(name, health, attack, defense) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }
}

function getRandom(min, max)
{
	return Math.floor(Math.random() * 5);
}

Character.prototype.attackCharacter = function(defender) {
  // Implement me!
  var damage = this.attack - defender.defense;
  var randomdamage = getRandom(0,5);
  damage += randomdamage;
  defender.health -= damage;
  console.log(this.name + " does " + damage + " damage to " + defender.name);
}

// Main Fight Logic
var player = new Character('Edward Norton', 100, 25, 20);
var enemy  = new Character('Tyler Durden', 100, 25, 20);
var round  = 1;

while (player.health && enemy.health) {
  runRound(round, player, enemy);
  round++;
  console.log('');
}

function runRound(round, p1, p2) {
  // Implement me!
  console.log('-----Begin Round ' + round + ' -----');
  p1.attackCharacter(p2);
  if (p2.health < 0)
  {
  	endGame(p1,p2);
  }
  else if (p1.health < 0)
  {
  	endGame(p2, p1);
  }
  p2.attackCharacter(p1);
  if (p2.health < 0)
  {
  	endGame(p1,p2);
  }
  else if (p1.health < 0)
  {
  	endGame(p2, p1);
  }
  console.log(p1.name + ' health: ' + p1.health);
  console.log(p2.name + ' health: ' + p2.health);
}

function endGame(winner, loser) {
  console.log('\n======== GAME OVER ========');
  console.log(winner.name + " wins against " + loser.name + " with " + winner.health + " health remaining!");
  process.exit();
}
