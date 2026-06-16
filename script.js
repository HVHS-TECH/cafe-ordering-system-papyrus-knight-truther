console.log("Running code");

//Variables
let shoppingCart = [  ];
const Toby = "Toby";
const Smilk = "Smilk";
let menu = [Toby, Smilk];

//main code
const OUTPUT = document.getElementById("Basket");



function addTobyToBasket() {
   function getFormInput() {
   const QUANTITY = document.getElementById("quantityForm");
   let quantity = quantityForm.value;
}
   if(quantity < 2){
   shoppingCart.push(Toby);
   OUTPUT.innerHTML += ("Toby ");
   console.log(shoppingCart);
   }

   else {
      for(quantity > 1; quantity --;) {
        shoppingCart.push(Toby);
      }
      OUTPUT.innerHTML += (quantity + "Toby ")
   }
}



function addSmilkToBasket() {
shoppingCart.push(Smilk)
OUTPUT.innerHTML += ("Smilk ")
console.log(shoppingCart)
}



/*function checkDuplicates(shoppingCart) {
  return check.size !== shoppingCart.length
 if (checkDuplicates() === true) {
  console.log("Duplicates found!")
} */