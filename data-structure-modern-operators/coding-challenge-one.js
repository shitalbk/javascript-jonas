/* Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrusia Dortmund',
  players: [
    [
      'Harry',
      'Govinda',
      'Pele',
      'Ronaldo',
      'Neymar',
      'Messi',
      'John',
      'Akbar',
      'Natli',
      'Peter',
    ],
    [
      'David',
      'Rohan',
      'Gundan',
      'Pratiki',
      'Olivia',
      'Martini',
      'Corey',
      'Maruii',
      'Popat',
      'Irikia',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski','Gnarby','Lewandowski','Hummels'],
  date: 'Nov 9th, 2037',
  odds:{
    team1: 1.33,
    draw: 30.22,
    team2: 66.4,
  },
};

// 1. create player1 and player2
const [players1, players2] = game.players;
console.log(players1,players2);

// 2. first player gk and other player remaining 10 from player 1
const [gk, ...fieldPlayers] = players1;
console.log(gk,fieldPlayers);

// 3. create allPlayers array with both team 
const allPlayers = [...players1,...players2];
console.log(allPlayers);

// 4. create new array player1Finals with 'Thiago', 'Coutinho' and 'Perisic'
const player1Finals = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(player1Finals);

// 5. creating variable for odds
const {odds: {team1, draw ,team2}} = game;
console.log(team1,draw,team2);

// 6. function printGoals
const printGoals = function (...players){
    console.log(players);
    console.log(`${players.length} goals were scored!!`);
}
// printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
// printGoals('Davies', 'Muller');
// printGoals('Davies', 'Muller','Testing');
printGoals(...game.scored);

// 7. print which team is more likely to win
team1 < team2 && console.log('Team 1 is more likely to win.');
team1 > team2 && console.log('Team 2 is more likely to win.');


