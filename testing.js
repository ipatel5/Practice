const oddEven(n,callback)  {

if(n%===0)
 callback(null,n)
else
    callbackI(true,n)
}
oddEven(2,(err,result)) {


    if(err)
        console.log('is odd:' +result)
    else
        console.log('is even:' +result)
}