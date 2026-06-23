console.log("Running code");

//Variables
let shoppingCart = [  ];
const TOBY ={
  name: "Toby",
  price: 3
} 
const SMILK ={
  name: "Smilk",
  price: 5
}
const menu = [TOBY, SMILK];
const QUANTITY = document.getElementById("quantityForm");
let quantity = quantityForm.value;

//main code
const OUTPUT = document.getElementById("Basket");



function addToBasket(TOBY, quantityForm) {
let quantity = quantityForm.value;
   if(quantity > 1){ 

      for( let i = 0; i < quantity; i++) {// that should let it count
        shoppingCart.push(TOBY);
        // if there is more than one item added, it SHOULD add them all
      }
      OUTPUT.innerHTML += quantity += TOBY.name += " " ; //space so the cart itemshave a space between them
      console.log(shoppingCart);
   }
   else {
     shoppingCart.push(Toby);
   OUTPUT.innerHTML += "Toby ";
   console.log(shoppingCart); 
   //if there is only one it shoukd add only one
   }
}

  