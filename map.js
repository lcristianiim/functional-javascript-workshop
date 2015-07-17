// function doubleAll(numbers) {
//     var result = [];
//     for (var i = 0; i < numbers.length; i++) {
//         result.push(numbers[i]*2)
//     }
//     return result;
// }

var numbers = [1, 2, 3];

function doubleAll (numbers) {
    return numbers.map(function(num){
        return num * 2;
    });
}
module.exports = doubleAll;
