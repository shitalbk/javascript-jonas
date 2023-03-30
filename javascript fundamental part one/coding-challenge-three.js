/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/
function teamDolphins() {
  const scoreOne = 110;
  const scoreTwo = 108;
  const scoreThree = 120;
  const averageDolphin = (scoreOne + scoreTwo + scoreThree) / 3;
  return averageDolphin;
}
function teamKoalas() {
  const scoreOne = 88;
  const scoreTwo = 91;
  const scoreThree = 110;
  const averageKoalas = (scoreOne + scoreTwo + scoreThree) / 3;
  return averageKoalas;
}

function winner() {
  const avg_Dolphin = teamDolphins();
  console.log(`Dolphin average score ${avg_Dolphin}.`);
  const avg_Koalas = teamKoalas();
  console.log(`Koalas average score ${avg_Koalas}.`);
  if (avg_Dolphin > avg_Koalas && avg_Dolphin >= 100) {
    console.log("Team Dolphins Win 🐬!!");
  } else if (avg_Koalas > avg_Dolphin && avg_Koalas >= 100) {
    console.log("Team Koalas Win! 🐨!!");
  } else if (
    avg_Dolphin === avg_Koalas &&
    avg_Dolphin >= 100 &&
    avg_Koalas >= 100
  ) {
    console.log("GAME DRAW 🌝!!");
  } else {
    console.log("Nobody Win 🌚!!!");
  }
}
winner();
