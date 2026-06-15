console.log("Running code")

//Variables
let shoppingCart = [  ]
const Toby = "Toby"
const Smilk = "Smilk"
let menu = [Toby, Smilk]

//main code
const OUTPUT = document.getElementById("Basket")

function addTobyToBasket() {
   shoppingCart.push(Toby)
   OUTPUT.innerHTML += ("Toby ")
   console.log(shoppingCart)
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