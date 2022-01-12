// starts the loading.
window.addEventListener('load', initializePage)

// Variables
var pizzaArray = ['Five Cheese', 'Pepperoni', 'Hamburger','Hawaiian', 'Margherita', 'Meat Lovers', 'Chef\'s Special'];
var pizzaPriceArracy = [9.99, 9.99, 9.99, 10.99, 10.99, 11.99, 11.99];
var pizza = "";
var pizzaNum = 0;
price = 0;
TAX = .076;

// initializes page
function initializePage()
{           
    addPieNum();
    addPieType();
    menu();
    document.getElementById('order').addEventListener('click', buttonClicked);
    document.getElementById('reset').addEventListener('click', reset);
}


// creates the menu on the left of the page
function menu()
{
    for (let i = 0; i < pizzaArray.length; i++)
    {       
        var liItem3 = document.createElement('li');
        liItem3.innerHTML = pizzaArray[i] + "";    
        document.getElementById('one').appendChild(liItem3).style.none;
    }  

    for (let i = 0; i < pizzaPriceArracy.length; i++)
    {   
        var liItem4 = document.createElement('li');
        liItem4.innerHTML = '---  $' + pizzaPriceArracy[i];    
        document.getElementById('two').appendChild(liItem4);
    }  
}

// This function runs most of the other functions. It is tied to the submit button
function buttonClicked() 
{    
    nameChecker();
    calc();    
    taxtotal
    document.getElementById('message').innerHTML = 'Heeeyyyyy ' + 
    document.getElementById('fname').value + ' ' + document.getElementById('lname').value + 
    '! We have you down for ' + pizzaNum + " x " + pizza + '.';  

    // The selection is price based, with the addition of the pizza number to stop null orders.
    if(price == 0 ||  pizzaNum == 0)    
    {
        document.getElementById('message').innerHTML = 'We can\'t quote you a price if you don\'t choose a pie.';
        document.getElementById('cheech').src = 'images/cheech2.jpg';  
        softReset();
    }

    else if (price == 30.99)
    {    
        document.getElementById('specialpizza').innerHTML = 'Looks like you just made up some food that you want us to make special'  +
        '; pretty creative. We charge $30.99 per pie for special requests. ' +
        'If that\'s what you want, the totals are below.';
        
        document.getElementById('subtotal').innerHTML = "- Sub Total: $" + subTotalForm;
        document.getElementById('taxtotal').innerHTML = "- Tax Total: $" + totalTaxForm;
        document.getElementById('grandtotal').innerHTML = "- Grand Total: $" + totalPriceForm;
        document.getElementById('calling').innerHTML = "Hold on, we're calling the number you gave us to confirm your order. I'm dialing " + document.getElementById('phone').value + " right now.";
        phoneChecker();        
    }      
    else
    {
        if(price < 30.99 && price > 0)
        {
            document.getElementById('specialpizza').innerHTML = '';
        }        
        document.getElementById('subtotal').innerHTML = "- Sub Total: $" + subTotalForm;
        document.getElementById('taxtotal').innerHTML = "- Tax Total: $" + totalTaxForm;
        document.getElementById('grandtotal').innerHTML = "- Grand Total: $" + totalPriceForm;
        document.getElementById('calling').innerHTML = "Hold on, we're calling the number you gave us to confirm your order. I'm dialing " + document.getElementById('phone').value + " right now.";
        phoneChecker();       
    }   
    console.log(pizza);
    console.log(pizzaNum);      
}

// Checks to see if the customer entered a phone number. Called from the submit button
function phoneChecker()
{
      pNum = document.getElementById('phone').value
    if (pNum == "")    
    {
        document.getElementById('calling').innerHTML = "I really want to call you to confirm your order, but notice " +
        " how your phone ain't ringing. You didn't put any number in the box. I'll wait while you add them and resubmit."
        document.getElementById('cheech').src = 'images/cheechphone.jpg';  
    } 
    else{
        document.getElementById('calling').innerHTML = "Hold on, we're calling " + document.getElementById('phone').value + " to confirm your order."       
        document.getElementById('cheech').src = 'images/cheechphone.jpg';  
        document.getElementById('cheech').src = 'images/cheech3.jpg';  
    }
}


// Loads the Pizza Type drop down.
function addPieType()
{
    for(let i = 0; i < pizzaArray.length; i++)
    {        
        var liItem = document.createElement('option');
        liItem.innerHTML = pizzaArray[i];
        document.getElementById('pietype').appendChild(liItem);
    }

    document.getElementById('pietype').addEventListener('change', function(e)
    {
        console.log(e.target.value);            
        pizza = e.target.value;
        pricePicker(pizza);            
    })   
}

// Switch that provides the price for pizzas. Additions to the mix become 30.99
function pricePicker(run)
{
    switch (run)
    {
        case "Five Cheese":           
            price = pizzaPriceArracy[0];
            break;
        case "Pepperoni":
            price = pizzaPriceArracy[1];
            break;
        case "Hamburger":
            price = pizzaPriceArracy[2];
        case "Hawaiian":
            price = pizzaPriceArracy[3];
            break;
        case "Margherita":
            price = pizzaPriceArracy[4];
            break;     
        case "Meat Lovers":
            price = pizzaPriceArracy[4];
            break;     
        case "Chef's Special":
            price = pizzaPriceArracy[4];           
            break;  
        case "":
            price = 0;
            break;  
        default:
            price = 30.99;
            break;                
    }

}

// provides all of the cost calculations
function calc ()
{
    var subTotal = pizzaNum * price;
    subTotalForm = subTotal.toFixed(2);
    var totalTax = subTotal * TAX;
    totalTaxForm = totalTax.toFixed(2);
    var totalPrice = pizzaNum * price + totalTax;
    totalPriceForm = totalPrice.toFixed(2);      
}

// Checks for the presence of names in the text boxes, and provides some if not given. 
function nameChecker()
{
    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    if (lname == ""|| fname == "")
    {
        document.getElementById('fname').value = 'Mr.';
        document.getElementById('lname').value = 'Man';
    }
}

// calculates the pizza quantity drop down.
function addPieNum()
{
    for(let i = 0; i < 10; i++)
    {
       
        var liItem2 = document.createElement('option');
        liItem2.innerHTML = i+1;
        liItem2.value = i + 1;    
        document.getElementById('pienum').appendChild(liItem2);
    }
    document.getElementById('pienum').addEventListener('change', function(e)
    {
        console.log(e.target.value);
        pizzaNum = e.target.value;
    })    
}

// Grand reset funtion tied to reset button
function reset()
{
    document.getElementById('fname').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('pienum').value = 0;
    document.getElementById('pietype').value = "";
    document.getElementById('message').innerHTML = "You wanna try that again?";
    document.getElementById('subtotal').innerHTML = "";
    document.getElementById('specialpizza').innerHTML = "";
    document.getElementById('taxtotal').innerHTML = "";
    document.getElementById('grandtotal').innerHTML = "";
    document.getElementById('calling').innerHTML = ""
    document.getElementById('nonum').innerHTML = "";
    document.getElementById('cheech').src = 'images/firstcheech.png';   
    subTotalForm = 0;
    totalTaxForm = 0;
    totalPriceForm = 0;
    price = 0;
    pizza = "";
    pizzaNum = 0;
}
 // lesser reset button used for the submit button.
function softReset()
{    
    document.getElementById('subtotal').innerHTML = "";
    document.getElementById('specialpizza').innerHTML = "";
    document.getElementById('taxtotal').innerHTML = "";
    document.getElementById('grandtotal').innerHTML = "";
    document.getElementById('calling').innerHTML = "";
    document.getElementById('nonum').innerHTML = "";
}











