const products = {
  "Phone": 300,
  "Smart TV": 220,
  "Gaming Console": 150
};

let cart = [];

function addItem(item) {
  if (products[item]) {
    cart.push(item);
    document.getElementById("message").textContent = `${item} added to cart.`;
    displayCart();
  } else {
    document.getElementById("message").textContent = `Sorry, we don't sell ${item}.`;
  }
}

function calculateTotalPrice() {
  let total = 0;
  for (let item of cart) {
    total += products[item];
  }
  if (total > 400) {
    total = total - (total * 0.1); // 10% discount
  }
  return total;
}

function displayCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
  document.getElementById("total").textContent = `Total: $${calculateTotalPrice()}`;
}

function pay() {
  const payment = parseFloat(document.getElementById("payment").value);
  const total = calculateTotalPrice();
  const message = document.getElementById("message");

  if (payment >= total) {
    const change = payment - total;
    message.textContent = `Thank you for your purchase! Your change is $${change.toFixed(2)}.`;
    cart = [];
    displayCart();
  } else {
    message.textContent = `Not enough money. You need $${(total - payment).toFixed(2)} more.`;
  }
}