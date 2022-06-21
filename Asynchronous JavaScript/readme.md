Async JavaScript

Javascript is a synchronous, blocking, single-threaded language

Synchronous 
- JavaScript executes one line at a time 

Blocking
- No matter how long a previous process takes it has to be completed first before the next one
- If function A is fired first before function B function must finish first regardless of how long it takes then function B will fire

Single-Threaded
- A thread is simply a process that JavaScript uses to run a task
- Each thread can only do one task a time 
- JavaScript only has one main thread for executing code

Callbacks

In JavaScript, functions are first class objects
- Just like an object, a function can be passed as an argument to a function 
- A function can also be returned as values from other functions
- Any function that is passed as an argument to another function is called a callback function in Javascript 
- The function which accept a function as an argument or returns a function is called a higher order function
- They can be asynchronous where the function gets executed after some time has passed or some data has been fetched 

Promise

- A promise is a proxy for a value not necessarily known when the promise is created. It allows you to
associate handlers with an asynchronous action's eventual success value or failure reason 
- A promise is simply an object in JavaScript
- A promise is always in one of the three states 
    - pending: which is initial state, neither fulfilled nor rejected
    - fulfilled: meaning that the operation completed successfully
    - rejected: meaning that the operation failed

Promise Object in my own words

- A promise is a an object that holds 3 states pending, fulfilled, and rejected.
-  A promise object is created with the new Promise() constructor and it takes two functions resolve() to change the pending state to fulfilled and reject() to change the pending state to rejected.
- Depending on the state of the promise and implementation specific functions will be executed as a result. 
- .then will execute when the promise object state is fulfilled
-.catch will execute when the promise object state is rejected
- The resolve and reject function can take in one argument that is passed to the callback function that is passed in .then or .catch
- Both of these functions take in a callback function 

Promise Static Methods

Promise.all()

- The Promise.all() method takes an iterable of promises as an input and returns a single Promise that resolves to an array of the results of the input promises
- Returned promise will resolve when all of the input's promises have been resolved, or if the input iterable contains no promises
- It rejects immediately if any of the input promises reject or the non-promises throw an error, and will reject with this first rejection message / error 

Promise.allSettled()

- Promise.allSettled() waits for all input promises to complete regardless of whether or not one of them is rejected

Promise.race()

- Promise.race() returns a promise that fulfills or rejects as soon as one of the input promises fulfills or rejects, with the value or reason from that promise

Async 

- The async keyword is used to declare async functions
- Async functions are functions that are instances of the AsyncFunction constructor 
- Unlike normal functions, async functions always return a promise

Await 

- Await keyword can be put infront of any async promise based function to pause your code until that promise settles and returns its result
- Await only works inside async functions. Cannot use await in normal functions

-The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains 
- async keyword allows the function to return a Promise
- await keyword pauses execution until a Promise is resolved or rejected 

Event Loop

- JS runtime environment has a memory heap and call stack
- Web API's are not implemented by JavaScript
- Callback queue / task queue first in first out 
- Event loop has one job check if the call stack is empty if it is then pop from the call back queue push it into the call stack


