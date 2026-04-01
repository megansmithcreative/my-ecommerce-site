let cart = [];

function addToCart(name, price) {
  cart.push({name, price});
  updateCart();
}

function updateCart() {
  let list = document.getElementById("cartItems");
  let count = document.getElementById("count");
  let total = 0;

  list.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item.name + " - Rs " + item.price;
    list.appendChild(li);
    total += item.price;
  });

  count.innerText = cart.length;
  document.getElementById("total").innerText = "Total: Rs " + total;
}

function toggleCart() {
  document.getElementById("cartBox").classList.toggle("active");
}

function checkout() {
  let message = "Order:\n";

  cart.forEach(item => {
    message += item.name + " - Rs " + item.price + "\n";
  });

  window.open("https://wa.me/92XXXXXXXXXX?text=" + encodeURIComponent(message));
}

document.querySelector(".arrow-down").addEventListener("click", function() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});
