console.log('Question 6');
let cars = [

  { type: 'hybrid', wholesale: 25000 },
  { type: 'minivan', wholesale: 28000 },
  { type: 'sedan', wholesale: 31500 },
  { type: 'convertible', wholesale: 45750 }
]
markupValue(cars, 10.5)


function markupValue(array,a){
let total = 0;
process.stdout.write('cars :[');

    for(let z=0;z<cars.length;z++){
    
    console.log('{' + cars[z].type+' :' + cars[z].wholesale*((a+100)/100) + '},');
    total = total + cars[z].wholesale*(a/100);
}
process.stdout.write(']');

console.log('total:'+total);
}