console.log('Question 2')
const resolvereject = (n) => {
    return new Promise((resolve, reject) => {
        for(let i=0;i<n.length;i++){
        if (n[i]==n[i].toLowerCase())
            resolve(`this letter was resolved: ${n}`)
        else
            reject(`this letter was rejected: ${n}`)
    }
    })
}

   
const letters  = ['A', 'b', 'c', 'D', 'e']
const sortLetters = (letters) => {
    const promises = letters.map((n) => {
        return resolvereject(n).catch((err) => {
            return err
        })
    })

    Promise.all(promises)
        .then((results) => {
            for(let i=0;i<results.length;i++){
            console.log(results[i])
        }
    })
}
sortLetters(letters)