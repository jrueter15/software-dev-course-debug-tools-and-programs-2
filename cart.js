// const cart = [];
// const cart = [{name: "Smart Watch", price: 300}];

const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if(discountRate > 0 && discountRate < 1){
    return total - total * discountRate; // Bug: Missing validation for discountRate
  }else{
    console.log("This is an invalid discount rate.")
    return total;
  }
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  if (typeof total !== "number"){
    console.log("Error");
  }else{
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number
  return receipt;
  }
}

debugger;
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
// const discountedTotal = applyDiscount(total, 0.2); // 20% discount
// const discountedTotal = applyDiscount(total, 0);
const discountedTotal = applyDiscount(total, 1)
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;


// Starting the HTML as is ony has the heading shopping cart, nothing else on the page
// Console has a type error with undefined/can't read at calculateTotal(10:29) and (30:15)
// Set breakpoints at lines 8, 15, 20
// Loop was iterating through i = 0, 1, 2, 3, since 3 is the arrays length, but there is nothing at position 3. This was a logic error. I was able to watch the value at each step of the iteration through the devTools.
// Changing this to < instead of <=
// The total and receipt are not adding up properly. Total is the discounted value, while receipt shows the discounted value
// Used a logic check to see if the discount rate was within the acceptable range
// Used a logic check to see if the total was a number
// If we test with nothing in the cart it prints a total of $0 with Items left blank
// Tested with one item and functioned properly
// Tested with a 0 and 1 and returned the total without a discount applied
