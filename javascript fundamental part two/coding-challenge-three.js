/* Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/
const mark = {
     firstName: 'Mark',
     lastName: 'Jonas',
     mass: 2360.34,
     height: 12.3,
     calcBMI: function (){
       let BMI = this.mass / (this.height * this.height);
       return BMI;
     }
};
const john = {
  firstName: 'John',
  lastName: 'Jonas',
  mass: 1570.12,
  height: 13.1,
  calcBMI: function (){
    let BMI = this.mass / (this.height * this.height);
    return BMI;
  }
};

const mark_BMI = mark.calcBMI();
console.log(mark.firstName + " " + mark.lastName + "'s BMI = " + mark_BMI.toFixed(2));
const john_BMI = john.calcBMI();
console.log(john.firstName + " " + john.lastName + "'s BMI = " + john_BMI.toFixed(2));
const higher_BMI = mark_BMI > john_BMI ? mark_BMI : john_BMI;
console.log("Higher BMI = " + higher_BMI.toFixed(2));

if(mark_BMI > john_BMI){
  console.log(mark.firstName + " " + mark.lastName + `'s BMI ${mark_BMI.toFixed(2)} is higher than John's ${john_BMI.toFixed(2)}!`);
}
else{
  console.log(john.firstName + " " + john.lastName + `'s BMI ${john_BMI.toFixed(2)} is higher than Mark's ${mark_BMI.toFixed(2)}!!!`);
}