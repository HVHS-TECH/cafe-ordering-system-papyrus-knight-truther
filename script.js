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
  price: 5,
  quantity: 1
}
const MENU = [TOBY, SMILK];



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

 
function getFormInput(moneyForm, TOTAL) {
 const MONEY = document.getElementById("moneyForm");
 const TOTAL = shoppingCart.value;
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

 