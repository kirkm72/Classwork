
function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function() {
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense++;
            console.log(this.name + " 's offense has gone up!\n-----------");
        } else {
            this.defense++;
            console.log(this.name + " 's defense has gone up!\n-----------");
        }
    };
    this.badGame = function() {
        if (Math.floor(Math.random() * 2) === 0) {
            this.defense--;
            console.log(this.name + " 's offense has gone down!\n----------");
        } else {
            this.defense--;
            console.log(this.name + " 's defense has gone down!\n----------");
        }
    };
    this.printInfo = function() {
        console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense: " + this.offense + "\nDefense: " + this.defense +  "\n---------");
    };
 }

let playerInfo = require("inquirer");
playerInfo
    .prompt([
        {
            type: "input",
            message: "Enter Player's name: ",
            name: "playerName"
          },
          {
            type: "input",
            message: "Player's Position: ",
            name: "position",
          },
          {
            type: "input",
            message: "Offensive Skill Level [1-10]: ",
            name: "offense",
          },
          {
            type: "input",
            message: "Defensive Skill Level [1-10]: ",
            name: "defense",
          },
    ])
    .then(playerInfo => {
        console.log('res', playerInfo);
        console.log("after response");
        const player1 = new Player(playerInfo.playerName, playerInfo.position, playerInfo.offense, playerInfo.defense);
        console.log('player', player1);
        if (starters.length < 3) {
            starters.push(player);
            starters.push(player);
            console.log(player.name + " added to starters!");
        } else {
            subs.push(player);
            subs.push(player);
            console.log(player.name + " added to subs!");
        }
        playerInfo();
    })
