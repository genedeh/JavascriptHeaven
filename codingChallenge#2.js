function scores(array1, array2){
    const minimumScore = 100;
    let total1 = 0;
    let average1 = 0;
    for(value1 of array1){
        total1 += value1
        let count1 = array1.length
        average1 = total1/count1
    }
    let total2 = 0;
    let average2 = 0;
    for(value2 of array2){
        total2 += value2
        let count2 = array2.length
        average2 = total2/count2
    }
    if (average1 > average2 && average1 >= minimumScore){
        console.log("The Dolphins win")
    }
    if (average2 > average1 && average2 >= minimumScore){
        console.log("The Koalas win")
    }
    if (average1 === average2){
        console.log(`DRAW`)
    }
};
// console.log(scores([97, 112, 101], [ 109, 95, 123]))
function Average(...numbers){
    if (numbers.length <= 1){
        throw new Error("The length of the array is less than 2")
    }
    let sum = 0;
    for (value of numbers){
        sum += value
    }
    const average = sum/numbers.length
    return average
}
try{
   console.log(Average(1, 2, 10223))
}
catch(e){
    console.log(e)
}
