// script.js
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function addToCart(pizza) {
  carrinho.push(pizza);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  updateCartCount();
}

function updateCartCount() {
  const carrinhoCount = document.getElementById("carrinhoCount");
  if (carrinhoCount) {
    carrinhoCount.textContent = carrinho.length;
  }
}

// Atualiza a contagem ao carregar a página
document.addEventListener("DOMContentLoaded", updateCartCount);
