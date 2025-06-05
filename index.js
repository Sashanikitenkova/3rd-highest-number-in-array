// Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).
// //Using the array 
// const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]
// //The correct answer is : 11

function thirdHighest (input){
    let first =0;
    let second =0;
    let third=0;
    
    for(var i =0; i<input.length; i++){
        if (input[i] > first){
            third = second;
            second = first;
            first = input[i];
        }
        else if (input[i] > second) {
            third = second;
            second = input[i];  
        }
        else if (input[i] > third) {
            third = input[i];
        }
    }
    return third;
}
console.log(thirdHighest([2,5,3,1,4]));