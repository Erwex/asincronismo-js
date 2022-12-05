const promise = new Promise(function (resolve,reject) {
resolve('hey!')
});



const cows =15;
const countCows = new Promise(function(resolve,reject){
    if (cows > 10){
        resolve(`we have ${cows} cows on the farm`);
    } else {
    reject('there ir no cows in the farm');
    }
    
});

countCows.then((result) => {
    console.log(result);
})