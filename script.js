console.log("Running code");

//Variables
let shoppingCart = [  ];
const Toby = "Toby";
const Smilk = "Smilk";
const menu = [Toby, Smilk];
const QUANTITY = document.getElementById("quantityForm");
let quantity = quantityForm.value;

/*function getFormInput() {
   let QUANTITY = document.getElementById("quantityForm");
}*/

//main code
const OUTPUT = document.getElementById("Basket");



function addTobyToBasket() {
let quantity = quantityForm.value;
   if(quantity > 1){ 

      for( let i = 0; i < quantity; i++) {// that should let it count
        shoppingCart.push(Toby);
        // if there is more than one item added, it SHOULD add them all
      }
      OUTPUT.innerHTML += quantity + " Toby ";
      console.log(shoppingCart);
   }
   else {
     shoppingCart.push(Toby);
   OUTPUT.innerHTML += "Toby ";
   console.log(shoppingCart); 
   //if there is only one it shoukd add only one
   }
}

function addSmilkToBasket() {
shoppingCart.push(Smilk);
OUTPUT.innerHTML += ("Smilk ");
console.log(shoppingCart);
}



/*function checkDuplicates(shoppingCart) {
  return check.size !== shoppingCart.length
 if (checkDuplicates() === true) {
  console.log("Duplicates found!")
} */

  