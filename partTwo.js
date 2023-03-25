/* LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/
function describeCountry(country,population,capitalCity){
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}
console.log(describeCountry('Nepal',23000,'Kathmandu'));
console.log(describeCountry('United States',900000,'Washington D.C'));
console.log(describeCountry('China',553000,'Beijing'));

/* LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/
function percentageOfWorld1(country,population){
  const percentage = (population/7900) * 100; 
  return `${country} has ${population} million people, so it's about ${percentage}% of the world population`;
}
const pop1 = percentageOfWorld1('Afganistan',98700);
const pop2 = percentageOfWorld1('Pakistan',2039232);
const pop3 = percentageOfWorld1('Tibet',4549549);

console.log(pop1);
console.log(pop2);
console.log(pop3);

const worldPop = function percentageOfWorld2(country,population){
  const percentage = (population/7900) * 100;
  return `${country} has ${population} million people, so it's about ${percentage}% of the world population`;
}
const popOne = worldPop('Nepal',700);
const popTwo = worldPop('America',232);
const popThree = worldPop('Japan',9549);

console.log(popOne);
console.log(popTwo);
console.log(popThree);

/* LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/
const percentageOfWorld3 = (country,population) => {
   const percent = (population/7900) * 100;
   return `${country} has ${population} million people, so it's about ${percent}% of the world population`;
}
console.log(percentageOfWorld3('Qatar',30000));

/* LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/
function percentage(population){
  const per = (population/7900) * 100;
  return per;
}
function describePopulation(country,population){
   const percent = percentage(population);
   return `${country} has ${population} million people, which is about ${percent}% of the world.`;
}
console.log(describePopulation("Ghana",900));
console.log(describePopulation("Poland",12900));
console.log(describePopulation("Kenya",44900));

/* LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/
