console.log("Running code");

//Variables


const STARFAIT ={
  name: " starfait",
  quantity : 0,
  price: 60
  
} 
const GLAMBURGER ={
  name: " Glamburger",
  quantity: 0,
  price: 120
}

const LEGHERO ={
  name: " Legendary Hero",
  quantity: 0,
  price: 300
}

const METASTEAK ={
  name: " Steak in the shape of mettatons face",
  quantity: 0,
  price: 500
}

let shoppingCart = [STARFAIT, GLAMBURGER, LEGHERO, METASTEAK];

const MENU = [STARFAIT, GLAMBURGER, LEGHERO, METASTEAK];

let total ;

let userMoney ;

let change ;

let quantity = quantityForm.value;


 let star= 0;
 let glam= 0;
 let leg= 0;
 let meta= 0;


//main code
const OUTPUT = document.getElementById("Basket");


// lets you add things to your basket
function addToBasket(STARFAIT, quantityForm, star) {
  const QUANTITY = document.getElementById("quantityForm")// finds the quantity of items so that total price can be claculated
  if(QUANTITY.checkValidity()=== false) {
        OUTPUT.innerHTML = "please fill out this form"
    }
    else if(star== 0) {
      
let quantity = quantityForm.value;
STARFAIT.quantity = quantityForm.value;
      OUTPUT.innerHTML += quantity += STARFAIT.name += " " ; //space so the cart items have a space between them
      console.log(shoppingCart);
      star = 1;
      return star;
      console.log(star);
   }
   else if(star== 1){
    OUTPUT.innerHTML += "you already have this item in your cart!";
   }
  }

  

function calculateTotal(){
  total = STARFAIT.price * STARFAIT.quantity + GLAMBURGER.price * GLAMBURGER.quantity + LEGHERO.price * LEGHERO.quantity + METASTEAK.price * METASTEAK.quantity ;
  console.log(total);
  //calculates the total price by multiplying the price by the amoun of items. there is probably an easier way to do this T.T
  
  
}
 
function getFormInput() {
  calculateTotal(); //re-calculates total on submit so the total is correct and up to date
  console.log(total); //just so i can make sure the total is correct!
  
  const NAME = document.getElementById("nameForm");
 userName = NAME.value;
  console.log(userName);
 const MONEY = document.getElementById("moneyForm");
 const MONEYFORM = document.getElementById("userMoneyForm");
 userMoney = MONEY.value;
  console.log(userMoney);
  change = (userMoney - total);
  console.log(change);
     if(MONEYFORM.checkValidity()=== false) {
        OUTPUT.innerHTML = "please fill out this form";
        
  }
  else if(userMoney < total) {
     OUTPUT.innerHTML += "You do not have enough G!";//lets the user know that they cannot afford their order
  }
  else{
    OUTPUT.innerHTML = "Hello " + userName + "! Your order has been confirmed! Your change is:" 
    + change + "G Thank you for shopping with us!";// lets the user know their order is confirmed
  }
}

function clearCart(){
    OUTPUT.innerHTML = " ";
    console.log(shoppingCart);
    STARFAIT.quantity = 0;//sets each item to 0
    GLAMBURGER.quantity = 0;
    LEGHERO.quantity = 0;
    METASTEAK.quantity = 0;
    star = 0;
    glam = 0;
    leg = 0;
    meta = 0;
  }
 