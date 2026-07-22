console.log("Running code");

//Variables
let shoppingCart = [  ];

const TOBY ={
  name: "Toby",
  quantity : 0,
  price: 3
  
} 
const SMILK ={
  name: "Smilk",
  quantity: 0,
  price: 5
}
const MENU = [TOBY, SMILK];

const TOTAL = shoppingCart.value;

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
function calculateTotal(){
 let total = SMILK.price * SMILK.quantity + TOBY.price * TOBY.quantity;
  console.log(total);
  return total;
}
 
function getFormInput(moneyForm, total) {
  calculateTotal();
 const MONEY = document.getElementById("moneyForm");
     if(MONEY.checkValidity()=== false) {
        OUTPUT.innerHTML = "please fill out this form"
  }
  else if(MONEY < total) {
     OUTPUT.innerHTML += "You do not have enough money";
  }
  else{
    OUTPUT.innerHTML += "Your order has been confirmed!";
  }
}

 