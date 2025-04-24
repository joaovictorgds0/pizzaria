document.addEventListener("DOMContentLoaded", () => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const lista = document.getElementById("lista-carrinho");
    const total = document.getElementById("total");
  
    if (carrinho.length === 0) {
      lista.innerHTML = "<p>Seu carrinho está vazio.</p>";
      total.textContent = "R$ 0,00";
      return;
    }
  
    let precoTotal = 0;
    lista.innerHTML = "";
  
    carrinho.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = item + " - R$ 39,90"; 
  
      precoTotal += 39.9;
  
      const btnRemover = document.createElement("button");
      btnRemover.textContent = "Remover";
      btnRemover.onclick = () => {
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        location.reload();
      };
  
      li.appendChild(btnRemover);
      lista.appendChild(li);
    });
  
    total.textContent = "R$ " + precoTotal.toFixed(2).replace(".", ",");
    updateCartCount();
  });
  
  function finalizarCompra() {
    alert("Compra finalizada com sucesso! Obrigado por escolher a Pizzaria Soli Deo Gloria.");
    localStorage.removeItem("carrinho");
    location.reload();
  }
  