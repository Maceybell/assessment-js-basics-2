///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.map(cart => cart.price)
    .reduce(function(previousValue, currentValue)
    {return previousValue + currentValue})

    // console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

let calcFinalPrice = (cartTotal, couponValue, tax) => {
    return (cartTotal + (cartTotal*tax) -couponValue)
}

// console.log(calcFinalPrice(summedPrice, 5, 0.06))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    My cusotmer object will include their name, so we know who an order is for. It will include an array of what they ordered so we know what to give them. It will include their order type to know whether they are dining in or not. It will include the order total so we can track the profit. And it will include the tip.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

let customer = {
    name: "Macey",
    order: ["Pepperoni pizza", "Breadsticks", "2L AW RootBeer"], 
    type: "Pick Up",
    totalCost: 24.54,
    tip: 4
    
}

console.log(customer)