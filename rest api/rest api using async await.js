
/**
 * Async Await Code to avoid callback hell
 */

const getDataAsync = async function getData(url, options) {
    const responseFromApi = await fetch(url, options);
    const jsonResponse = await responseFromApi.json();
    return jsonResponse;
}

getDataAsync(url, options)
.then(data => {
    console.log('\n\n async await - data', data.entries[0]);
})






















// function sayHello(greeting) {
//     console.log(greeting);
//     console.log(`${greeting}, ${this.name} \n`);
// }
  
// const person = { name: 'John' };

// sayHello.call(person, 'Hi From call')    // calls the function with context to this as 1st param and others params , separated

// sayHello.apply(person, ['Hi from apply'])     // calls the function with context to this as 1st param, and array of params

// const sayHelloJohn = sayHello.bind(person);   // it returns a function with the this context set
// sayHelloJohn('Hi from bind')
  