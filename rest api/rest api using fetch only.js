

/**
 * Steps of Making API Call from Javascript or any JS library or framework
 * (use Fetch or axios in React)
 * 
 * 
 * 1. Create variable for required parameters for fetch method
 * 2. Make call using fetch by passing in the above created parameters
 * 3. Consume the json and process it as per your need
 */


// Required parameters for fetching data from server

const url = 'https://api.publicapis.org/entries';

const options = {
    method: 'GET',   
    headers: {
        'Accept': 'application/json'  // yaad rakho, ye server ko instruct krta hai ke mai sirf JSON format me 
                                      // data lunga, socho mat likh do
    }
}

fetch(url, options)    // 1st parameter - address, 2nd parameter - instruction server ko
.then(promise => {     // first parameter is always a promise, ye then ka code hmesa likhna hai
    return promise.json();
})
.then(data => {
    console.log('\n\n callback data got', data.entries[0]);
})
.catch(err => {
    console.log('error', err);
});

/**
 * Make API Call using fetch and promises (don't worry it's just a term)
 * 
 * -> Javascript promise meaning is same as English meaning of promise
 *    (hum wada krte hai ke apko server se data lake denge)
 * 
 * -> So the first then keyword after fetch(url, options) is always a promise 
 *    (koi bhi name use kr skte hai jaruri nahi h promise he bolo)
 * 
 * -> promise bhi javascript ka term hai jo hold krta h tmhara (data, error) - concept hai yaad rkho bs
 *    Second param error jo hai - server hmesa sahi data nhi bhejta h kbhi kbhi error bhejta hai ke wo fail
 *    ho gaya isliye promise ka second param error hai aur phla actual correct data
 * 
 * -> promise ko JSON me convert krna next step hota hai hmesa krna hai ye kyunki
 *    tmko ek Javascript object chahiye - ye json aur kuch nahi actual data hai jo server 
 *    bheja hai
 * 
 * 
 * Disadvantage :
 * 
 * If you see below code we are using then multiple times,
 * if a situation is like this that you will call multiple apis to get your data
 * then the chain (basically then keyword in your code) will keep getting longer which
 * will make your code hard to read and understand and this is known as Callback Hell.
 */



