console.log("Running code");

//Variables
let shoppingCart = [  ];

const TOBY ={
  name: "Toby",
  quantity : 1,
  price: 3
  
} 
const SMILK ={
  name: "Smilk",
  quantity: 1,
  price: 3
}
const MENU = [TOBY, SMILK];



let total = calculateTotal(SM;

function calculateTotal(SMILK, TOBY) {
    SMILK.price * SMILK.quantity + TOBY.price * TOBY.quantity
  }

let quantity = quantityForm.value;

//main code
const OUTPUT = document.getElementById("Basket");

function addToBasket(TOBY, quantityForm) {
  const QUANTITY = document.getElementById("quantityForm")
  if(QUANTITY.checkValidity()=== false) {
        OUTPUT.innerHTML = "please fill out this form"
    }
    else{
      
let quantity = quantityForm.value;
TOBY.quantity = quantityForm.value;
   shoppingCart.push(TOBY);
      OUTPUT.innerHTML += quantity += TOBY.name += " " ; //space so the cart itemshave a space between them
      console.log(shoppingCart);
   }
  }

 
function getFormInput(moneyForm, total) {
  calculateTotal(SMILK, TOBY);
 const MONEY = document.getElementById("moneyForm");
     if(MONEY.checkValidity()=== false) {
        OUTPUT.innerHTML = "please fill out this form"
  }
  else if(MONEY < TOTAL) {
     OUTPUT.innerHTML += "You do not have enough money";
  }
  else{
    OUTPUT.innerHTML += "Your order has been confirmed!";
  }
}

 