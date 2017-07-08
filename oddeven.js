
console.log('Question 4')

Oddeven([ 21, 99, 43, 1, 8, 2, 48, 82 ]);
function Oddeven(array) {
let even = [];
let odd =[];
for(let z=0;z<array.length;z++){
    if(array[z]%2==0){
    even.push(array[z]);
    }
    else{
    odd.push(array[z]);
    }
}

console.log('Odds =['+odd.toString() + ']');
console.log('Evens =['+even.toString() + ']');
}