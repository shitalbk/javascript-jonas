/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall
*/

function calculateBMI(mass,height){
  const BMI = mass/(height * height);
  return BMI;
}
function markBMI(){
   const mass = 78;
   const height = 1.69;
   const markBMI = calculateBMI(mass,height);
   console.log(`Marks weights ${mass} kg and is ${height} m tall having ${markBMI} BMI.`);
}
function JohnBMI(){
  const mass = 92;
  const height = 1.95;
  const johnBMI = calculateBMI(mass,height); 
  console.log(`John weights ${mass} kg and is ${height} m tall having ${johnBMI} BMI.`);
}
function BMI_Higher(){
   const mark_BMI = markBMI();
   const john_BMI = JohnBMI();
   const markHigherBMI = mark_BMI > john_BMI;
   console.log(markHigherBMI);
}
BMI_Higher();