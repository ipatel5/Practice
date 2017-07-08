console.log('Question 1')
let count = 0;

countdown(5);

function countdown(count)
{
const id = setInterval(() => {
    if (count === 0)
        clearInterval(id)
    else
        console.log(count)

    count--
}, 300)
}