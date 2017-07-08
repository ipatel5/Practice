console.log('Question 5');
averageArray([3, 9, 'hello', 4, '95', 'abc', '1', 8, { key: 'value ' }])

function averageArray(array) {
let average=0;

let sum = 0;

let a = 0;

for(let z=0;z<array.length;z++){
	
    if(!isNaN(parseInt(array[z]))){
    sum = sum + parseInt(array[z]);
    a++;
}

}


    average = sum / a;
    console.log(average);

}