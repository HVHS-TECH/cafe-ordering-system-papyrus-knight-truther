console.log("Running code")

//Variables
let shoppingCart = [  ]
let check = new set();
const Toby = "Toby"
const Smilk = "Smilk"

//main code
const OUTPUT = document.getElementById("Basket")

function addTobyToBasket() {
   shoppingCart.push(Toby)
   check.add(Toby)
   function checkDuplicates(shoppingCart) {
  return check(shoppingCart).size !== array.length
 if (checkDuplicates() === true) {
  console.log("Duplicates found!")
} 
}
   OUTPUT.innerHTML += ("Toby ")
   console.log(shoppingCart)
}



function addSmilkToBasket() {
shoppingCart.push(Smilk)
OUTPUT.innerHTML += ("Smilk ")
console.log(shoppingCart)
}
