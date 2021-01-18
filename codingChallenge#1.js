// Store marks BMI in a variable
const marksMass = 85
const marksHeigth = 1.88
const johnsMass = 85
const johnsHeigth = 1.88
function Bmi(firstName, secondName, firstMass, firstHeight, secondMass, secondHeigth){
    let firstBmi = firstMass / (firstHeight * firstHeight)
    let secondBmi = secondMass / (secondHeigth * secondHeigth)
    if (firstBmi > secondBmi){
        return `${firstName} BMI is higher than ${secondName}`
    }
    if (secondBmi > firstBmi){
        return `${secondName} BMI is higher than ${firstName}`
    }
    return `They are both the same`
};

// console.log(Bmi("Marks", "Johns", marksMass, marksHeigth, johnsMass, johnsHeigth))