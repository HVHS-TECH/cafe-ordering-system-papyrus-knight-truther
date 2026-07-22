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

let total ;

let quantity = quantityForm.value;

//main code
const OUTPUT = document.getElementById("Basket");



function addToBasket() {
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
  total = SMILK.price * SMILK.quantity + TOBY.price * TOBY.quantity;
  console.log(total);
  
}
 
function getFormInput() {
  calculateTotal();
  console.log(total);
 const MONEY = document.getElementById("moneyForm");
 console.log(MONEY);
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

 