function greet(name)
{
    console.log("Hello " + name );
}

// This will execute the greet function after 2 seconds
// setTimeout(greet, 2000, "Raul");

// Prevents the function from executing
const timeOut = setTimeout(greet, 2000, "Raul");
clearTimeout(timeOut);

//  This will continue to execute the greet function at 2 second intervals
// setInterval(greet, 2000, "Raul Uriostegui")

function greetPaul(greetFn)
{
    const myName ="Paul";
    greet(myName);
}

// greetPaul(greet);

// Promise section
const promise1 = new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        // This argument is passed to function in .then
        resolve("Bringing tacos");
    }, 5000)
})

const promise2 = new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        // This argument is passed to function in .catch
        reject("Not bringing tacos. Food truck not there.");
    }, 5000)
})

const onFulfillment = (result) =>
{
    console.log(result);
    console.log("set up the table to eat tacos");
}

const onRejection = (error) =>
{
    console.log(error)
    console.log("start cooking pasta");
}

// Promise status: pending to fulfilled then then() is executed
// Promise status: pending to rejected then catch() is executed
promise1.then(onFulfillment);
promise2.catch(onRejection);

//  promise.than(onFulfillment).catch(onRejection)
const myPromise1 = Promise.resolve(3);
const myPromise2 = 42;
const myPromise3 = new Promise((resolve, reject) =>
{
    setTimeout(resolve, 1000, "foobar");
})

const myPromise4 = Promise.all([myPromise1, myPromise2, myPromise3]).then((values) =>
{
    console.log(values);
})
.catch(() =>
{
    console.log("hello worlds")
})

// const anotherPromise = 7;
// anotherPromise.then(greet("Yes"));
// anotherPromise.catch(greet("No"))

async function greet2()
{
    let somePromise = new Promise((resolve, reject) =>
    {
        setTimeout(() => resolve("Hello"), 1000)
    });
    
    let result =  await somePromise;
    console.log(somePromise);
    console.log(result)
}

// greet2();

function resolveHello()
{
    return new Promise(resolve => 
        {
            setTimeout(function () {
                resolve("Hello")
            }, 2000)
        })
}

function resolveWorld()
{
    return new Promise(resolve => 
        {
            setTimeout(function () {
                resolve("World")
            }, 1000)
        })
}

async function concurrentStart()
{
    const hello = resolveHello();
    const world = resolveWorld();

    console.log(await hello)
    console.log(await world)
}

concurrentStart();





