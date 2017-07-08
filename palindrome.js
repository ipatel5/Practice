console.log('Question 3')
const print = (word,callback) => {
    reverseWord(word,(result) =>{
        console.log(result)
        
    })

}

const reverseWord = (word,callback) => {
    let i = word.split("").reverse().join("");
     compare(word,i,(result) => {
        callback(result)
     })
}

const compare = (word,i,callback) => {
      if(word==i){          
        callback(true);         
    }                
    else{         
        callback(false);     
    }  
}

print('kayak');              
print('canoe')