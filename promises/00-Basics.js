const p1 = new Promise((resolve, reject) => {
    resolve(123)
})

p1.then(value => console.log(`${value} from p1`));

console.log(456)



const p1Equivalent = Promise.resolve(123);

p1Equivalent.then(value => console.log(`${value} from p1Equivalent`));

console.log(789)
