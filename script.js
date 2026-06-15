console.log("Running code")

//Variables
let shoppingCart = [  ]
let check = set();
const Toby = "Toby"
const Smilk = "Smilk"

//main code
const OUTPUT = document.getElementById("Basket")

function addTobyToBasket() {
   shoppingCart.push(Toby)
   check.add(Toby)
   
}
   OUTPUT.innerHTML += ("Toby ")
   console.log(shoppingCart)
}



function addSmilkToBasket() {
shoppingCart.push(Smilk)
OUTPUT.innerHTML += ("Smilk ")
console.log(shoppingCart)
}


/**function checkDuplicates(shoppingCart) {
  return check.size !== shoppingCart.length
 if (checkDuplicates() === true) {
  console.log("Duplicates found!")
} ** 
 