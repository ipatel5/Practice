console.log('Question 2')
function replaceVowels(args){
	const vowels = ['a','e','i','o','u','A','E','I','O','U'];
	let ans = '';
	let counter = false; 
	for(let i = 0 ; i < args.length; i++){
		for(let j = 0 ; j < vowels.length; j++){
			if(args[i] === vowels[j]){
				counter = true;
			}
		}
		
		if(counter === true){
			ans += '*';
		}
		
		else{
			ans += args[i];
		}
		
		counter = false
	}
	
	return ans;
}

console.log(replaceVowels('javascript'));
console.log(replaceVowels('angular'));