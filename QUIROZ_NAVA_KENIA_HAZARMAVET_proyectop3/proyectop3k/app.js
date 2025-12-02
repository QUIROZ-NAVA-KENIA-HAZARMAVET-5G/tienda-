const products = [
  { id: 1, name: "Peluche Conejito Rosa", category: "animales", price: 250, image: "imagenes/conejo.jpg" },
  { id: 2, name: "Unicornio Mágico", category: "fantasia", price: 320, image: "imagenes/unicornio.jpg" },
  { id: 3, name: "Osito Vintage", category: "coleccion", price: 280, image: "imagenes/osito.webp" },
  { id: 4, name: "Tortuga", category: "animales", price: 500, image: "imagenes/tortuga.jpg" },
  { id: 5, name: "Hada del Jardín", category: "fantasia", price: 800, image: "imagenes/hada.jpg" },
  { id: 6, name: "Orquídea", category: "flores", price: 250, image: "imagenes/flores.jpg" },
  { id: 7, name: "Girasol", category: "flores", price: 80, image: "imagenes/girasol.jpg" },
  { id: 8, name: "rosa", category: "flores", price: 80, image: "imagenes/rosa.jpg" },
  { id: 9, name: "tulipanes", category: "flores", price: 80, image: "imagenes/tulipan.jpg" },
  { id: 10, name: "ramos", category: "flores", price: 1000, image: "imagenes/ramo.jpg" }
];

const state = {
  category: "todas",
  sort: "popular",
  search: "",
  cart: [],
  favorites: []
};

const catalog = document.getElementById("catalog");

function renderCatalog() {
  let filtered = [...products];

  if (state.category !== "todas") {
    filtered = filtered.filter(p => p.category === state.category);
  }

  if (state.search.trim() !== "") {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(state.search.toLowerCase())
    );
  }

  if (state.sort === "precio_asc") filtered.sort((a, b) => a.price - b.price);
  if (state.sort === "precio_desc") filtered.sort((a, b) => b.price - a.price);

  catalog.innerHTML = filtered
    .map(product => `
      <div class="card">
        <div style="position:relative">
          <img src="${product.image}" alt="${product.name}">
          <button class="fav-btn ${state.favorites.includes(product.id) ? "active" : ""}"
            onclick="toggleFavorite(${product.id})">❤️</button>
        </div>
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
          <button class="btn btn-primary" onclick="addToCart(${product.id})">Añadir al carrito 🛒</button>
        </div>
      </div>
    `).join("");
}

renderCatalog();

const favCount = document.getElementById("favCount");

function toggleFavorite(id) {
  const index = state.favorites.indexOf(id);
  if (index >= 0) {
    state.favorites.splice(index, 1);
  } else {
    state.favorites.push(id);
  }

  favCount.textContent = state.favorites.length;
  renderCatalog();
}

document.getElementById("favoritesBtn").onclick = () => {
  showModal("favoritesModal");
  renderFavorites();
};

function renderFavorites() {
  const container = document.getElementById("favoritesItems");

  if (!state.favorites.length) {
    container.innerHTML = "<p>No hay favoritos aún 💗</p>";
    return;
  }

  container.innerHTML = state.favorites
    .map(id => {
      const p = products.find(x => x.id === id);
      return `
        <div class="fav-item">
          <img src="${p.image}">
          <div>
            <h4>${p.name}</h4>
            <p>$${p.price}</p>
          </div>
        </div>`;
    })
    .join("");
}


const cartCount = document.getElementById("cartCount");

function addToCart(id) {
  const item = state.cart.find(p => p.id === id);

  if (item) {
    item.qty++;
  } else {
    state.cart.push({ id, qty: 1 });
  }

  updateCartCount();
}

function updateCartCount() {
  cartCount.textContent = state.cart.reduce((acc, p) => acc + p.qty, 0);
}

document.getElementById("cartBtn").onclick = () => {
  showModal("cartModal");
  renderCart();
};

function renderCart() {
  const container = document.getElementById("cartItems");
  const subtotalEl = document.getElementById("cartSubtotal");

  if (state.cart.length === 0) {
    container.innerHTML = "<p>Tu carrito está vacío 🧸</p>";
    subtotalEl.textContent = "$0.00";
    return;
  }

  let subtotal = 0;

  container.innerHTML = state.cart
    .map(item => {
      const p = products.find(pr => pr.id === item.id);
      const total = p.price * item.qty;
      subtotal += total;

      return `
        <div class="cart-item">
          <img src="${p.image}">
          <div>
            <h4>${p.name}</h4>
            <p>${item.qty} x $${p.price}</p>
          </div>
          <strong>$${total}</strong>
        </div>
      `;
    })
    .join("");

  subtotalEl.textContent = `$${subtotal}`;
}


document.getElementById("checkoutBtn").onclick = () => {
  const thankModal = document.getElementById("thankyouModal");
  const thankItems = document.getElementById("thankyouItems");

 
  thankItems.innerHTML = state.cart
    .map(item => {
      const p = products.find(pr => pr.id === item.id);
      return `
        <div class="thank-item">
          <strong>${p.name}</strong> — Cant: ${item.qty} — $${p.price * item.qty}
        </div>
      `;
    })
    .join("");

  
  thankModal.classList.add("show");

 
  state.cart = [];
  updateCartCount();
  renderCart();


  document.getElementById("cartModal").classList.remove("show");
};

document.getElementById("searchBtn").onclick = () => {
  state.search = document.getElementById("searchInput").value;
  renderCatalog();
};

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    state.category = chip.dataset.chip;
    renderCatalog();
  });
});


document.getElementById("sortSelect").onchange = e => {
  state.sort = e.target.value;
  renderCatalog();
};

document.getElementById("clearFilters").onclick = () => {
  state.category = "todas";
  state.sort = "popular";
  state.search = "";
  document.getElementById("searchInput").value = "";

  document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
  document.querySelector(".chip[data-chip='todas']").classList.add("active");

  renderCatalog();
};

document.getElementById("filtersToggle").onclick = () => {
  document.getElementById("filtersPanel").classList.toggle("open");
};

function showModal(id) {
  document.getElementById(id).classList.add("show");
}


document.querySelectorAll("[data-close]").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-close");
    document.getElementById(id).classList.remove("show");
  });
});


document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("show");
  });
});

document.getElementById("loginBtn").onclick = () => {
  showModal("loginModal");
};
