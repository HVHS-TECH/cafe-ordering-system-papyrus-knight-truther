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

let quantity = quantityForm.value;

//main code
const OUTPUT = document.getElementById("Basket");


// lets you add things to your basket
function addToBasket(STARFAIT, quantityForm) {
  const QUANTITY = document.getElementById("quantityForm")// finds the quantity of items so that total price can be claculated
  if(QUANTITY.checkValidity()=== false) {
        OUTPUT.innerHTML = "please fill out this form"
    }
    else{
      
let quantity = quantityForm.value;
STARFAIT.quantity = quantityForm.value;
      OUTPUT.innerHTML += quantity += STARFAIT.name += " " ; //space so the cart items have a space between them
      console.log(shoppingCart);
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
  
 const MONEY = document.getElementById("moneyForm");
 const MONEYFORM = document.getElementById("userMoneyForm");
 userMoney = MONEY.value;
  console.log(userMoney);
     if(MONEYFORM.checkValidity()=== false) {
        OUTPUT.innerHTML = "please fill out this form"
  }
  else if(userMoney < total) {
     OUTPUT.innerHTML = "You do not have enough G!";
  }
  else{
    OUTPUT.innerHTML = "Your order has been confirmed!";
  }
}

function clearCart(){
    OUTPUT.innerHTML = " ";
    console.log(shoppingCart);
    STARFAIT.quantity = 0;
    GLAMBURGER.quantity = 0;
    LEGHERO.quantity = 0;
    METASTEAK.quantity = 0;
  }
 