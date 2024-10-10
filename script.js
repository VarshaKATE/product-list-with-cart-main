
let totalItems = 0;
let totalPrice = 0;

function addToCart(price){
    totalItems += 1;
    totalPrice += price;


document.getElementById("total-items").innerText = totalItems
document.getElementById("total-price").innerText = totalPrice

alert('product added to the card!')
}