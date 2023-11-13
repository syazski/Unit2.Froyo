/*A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. 
They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. 
When they view the browser console, they observe an object listing how many of each flavor they have ordered. 
In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.*/

//prompt user for froyo flavors and store results as a const
const userInputString = prompt(
    "Please enter some Froyo flavors separated by commas:",
    "vanilla,strawberry,coffee"
  );
    //console.log(userInputString);

//parse input into an array
 let flavorsArray = userInputString.split(",");
    //console.log(flavorsArray);

// create function that take in the array into an object
// if userInput match to object, count ++
// if not, create a new value 

function froyoOrders(flavors) {
    const orders = {};
    for (let i = 0; i < flavors.length; i++) {
        if(orders[flavors[i]]) {
            orders[flavors[i]]++;
        } else
        orders[flavors[i]] = 1;
    }
    return orders;
}
console.log(froyoOrders(flavorsArray));

// ALTERNATIVE attempt lololol
/*create a function to count how many times vanilla appears

function vanillaCounter(flavor){
    let count = 0;
    for(i=0; i < flavor.length; i++){
    if(flavor[i] === 'vanilla'){
        count++;
    }
    }
    return count;
}

//create a function to count how many times strawberry appears
function strawCounter(flavor){
    let count = 0;
    for(i=0; i < flavor.length; i++){
    if(flavor[i] === 'strawberry'){
        count++;
    }
    }
    return count;
};

//create a function to count how many times coffee appears
function coffeeCounter(flavor){
    let count = 0;
    for(i=0; i < flavor.length; i++){
    if(flavor[i] === 'coffee'){
        count++;
    }
    }
    return count;
};

//console.log(vanillaCounter(flavorsArray),strawCounter(flavorsArray), coffeeCounter(flavorsArray));

//create objects based on counter functions

const orders = {
    vanilla: vanillaCounter(flavorsArray),
    strawberry: strawCounter(flavorsArray),
    coffee: coffeeCounter(flavorsArray)
};

console.log(orders); */