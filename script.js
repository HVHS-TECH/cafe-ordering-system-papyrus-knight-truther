console.log("Running code");

//Variables
let shoppingCart = [  ];

const STARFAIT ={
  name: "starfait",
  quantity : 0,
  price: 60
  
} 
const GLAMBURGER ={
  name: "Smilk",
  quantity: 0,
  price: 120
}

const LEGHERO ={
  name: "Smilk",
  quantity: 0,
  price: 300
}

const METASTEAK ={
  name: "Smilk",
  quantity: 0,
  price: 500
}

const MENU = [STARFAIT, GLAMBURGER, LEGHERO, METASTEAK];

let total ;

let quantity = quantityForm.value;

//main code
const OUTPUT = document.getElementById("Basket");

let userMoney ;

function addToBasket(STARFAIT, quantityForm) {
  const QUANTITY = document.getElementById("quantityForm")
  if(QUANTITY.checkValidity()=== false) {
        OUTPUT.innerHTML = "please fill out this form"
    }
    else{
      
let quantity = quantityForm.value;
TOBY.quantity = quantityForm.value;
   shoppingCart.push(STARFAIT);
      OUTPUT.innerHTML += quantity += STARFAIT.name += " " ; //space so the cart itemshave a space between them
      console.log(shoppingCart);
   }
  }
function calculateTotal(){
  total = STARFAIT.price * STARFAIT.quantity + GLAMBURGER.price * GLAMBURGER.quantity + LEGHERO.price * LEGHERO.quantity + METASTEAK.price * METASTEAK.quantity ;
  console.log(total);
  
}
 
function getFormInput() {
  calculateTotal();
  console.log(total);
 const MONEY = document.getElementById("moneyForm");
 const MONEYFORM = document.getElementById("userMoneyForm");
 userMoney = MONEY.value;
 console.log(userMoney);
     if(MONEYFORM.checkValidity()=== false) {
        OUTPUT.innerHTML = "please fill out this form"
  }
  else if(userMoney < total) {
     OUTPUT.innerHTML += "You do not have enough money";
  }
  else{
    OUTPUT.innerHTML += "Your order has been confirmed!";
  }
}

 