
console.log('Question 3')

let countLetters = ['z', 'y', 'x', 'x', 'w', 'z', 'y', 'u', 'y', 'y'];

function count(countLetters) {
    let x = [], y = [], previous;
    
    countLetters.sort();
    for ( let z = 0; z < countLetters.length; z++ ) {

        if ( countLetters[z] !== previous ) {
            x.push(countLetters[z]);

            y.push(1);
        } 
        else 
        {
            y[y.length-1]++;
        }
        previous = countLetters[z];
    }

    process.stdout.write('{')

    for(let z = 0 ; z<x.length;z++){
        process.stdout.write(x[z]+':'+y[z]+' ');
    
    }
    
    process.stdout.write('}')
   
}
count(countLetters);