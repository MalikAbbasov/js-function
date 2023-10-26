// 1.Verilmis arrayin icerisinde deyeri 45 olan elementin indexini tapan function.
// let num = 0 
// function findIndeks(...params) {
//     for (let i = 0; i < params.length; i++) {
//         if (params[i]===45) {
//             num=i
//         }
//     }
//     return num

// }
// console.log(findIndeks(23,4,54,32,43,312,32,45));



// 2. Verilmiş elementin bir ölçülü massivdə neçə dəfə təkrarlandığını tapan function tərtib edin.
// let num = 2
// let count = 0
// const params =[2,3,4,2,2,1,2,2]
// function findNumb(...params) {
//     for (let i = 0; i < params.length; i++) {
//         if (num === params[i]) {
//             count++
//         }        
//     }
//     return count;
// }

// console.log(findNumb(...params));



// 3. arrayin  elementləri arasında minimum və maksimum elementi nəzərə almadan yerde qalan elementlərin cəmini tapan function.
// let minValue = 1
// let maxValue = 0
// let sumArr = 0
// let sum = 0
// function findSum(...params) {
//     for (let i = 0; i < params.length; i++) {
//         if (minValue>params[i]) {
//             minValue = params[i]         
//         }
//         if (maxValue<params[i]) {
//             maxValue = params[i]
            
//         }    
//         sumArr += params[i] 
//         sum = sumArr - (minValue + maxValue)  
//     }
//     return sum 
// }
// console.log(findSum(2,3,21,32,4,1));


// 4.Verilmis n ededinin son reqemini onun evveline getirerek yeni bir eded duzelden function.
