// Fungsi untuk menampilkan produk di keranjang
function displayCart() {
    const cartList = document.getElementById("cart-list");
    const totalValue = document.getElementById("total-value");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Cek apakah ada produk di keranjang
    if (cartList) {
        cartList.innerHTML = ""; // Clear list sebelum menambahkan ulang produk
    }

    let totalPrice = 0;

    // Loop untuk menambahkan setiap item dalam keranjang
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

        listItem.innerHTML = `
            <span>${item.nama}</span>
            <div>
                <button class="btn btn-sm btn-outline-secondary change-quantity" data-id="${item.id}" data-action="decrease">-</button>
                <span class="mx-2">${item.quantity}</span>
                <button class="btn btn-sm btn-outline-secondary change-quantity" data-id="${item.id}" data-action="increase">+</button>
            </div>
            <span class="fw-bold">Rp. ${item.harga * item.quantity}</span>
        `;

        cartList.appendChild(listItem);

        totalPrice += item.harga * item.quantity;
    });


    if (totalValue) {
        totalValue.textContent = `Rp. ${totalPrice}`;
    }


    const changeButtons = document.querySelectorAll('.change-quantity');
    changeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const id = parseInt(button.getAttribute("data-id"));
            const action = button.getAttribute("data-action");

            changeQuantity(id, action);
        });
    });
}

// Fungsi untuk mengubah kuantitas
function changeQuantity(id, action) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const productIndex = cart.findIndex(item => item.id === id);

    if (productIndex !== -1) {
        if (action === "increase") {
            cart[productIndex].quantity += 1;
        } else if (action === "decrease" && cart[productIndex].quantity > 1) {
            cart[productIndex].quantity -= 1;
        }

    
        localStorage.setItem("cart", JSON.stringify(cart));

      
       
    }
}


function addToCart(id, nama, harga) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

  
    const productIndex = cart.findIndex(item => item.id === id);

    if (productIndex === -1) {
        // Jika produk belum ada, tambahkan produk baru ke keranjang
        cart.push({
            id: id,
            nama: nama,
            harga: harga,
            quantity: 1
        });
    } else {
        // Jika produk sudah ada, tingkatkan kuantitasnya
        cart[productIndex].quantity += 1;
    }

    // Simpan kembali data keranjang ke localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Pindah ke halaman keranjang
    window.location.href = "keranjang.html";
}

// Event listener untuk tombol "Tambah ke Keranjang"
document.addEventListener("DOMContentLoaded", function () {
    const addButtons = document.querySelectorAll('.add-to-cart');

    addButtons.forEach(button => {
        button.addEventListener('click', function () {
            const id = parseInt(button.getAttribute("data-id"));
            const nama = button.getAttribute("data-nama");
            const harga = parseFloat(button.getAttribute("data-harga"));  // Gunakan parseFloat untuk angka desimal

            if (!isNaN(harga)) {
                addToCart(id, nama, harga);
            } else {
                console.error('Harga tidak valid');
            }
        });
    });

    // Event listener untuk tombol checkout
    const checkoutButton = document.getElementById("checkout");
    if (checkoutButton) {
        checkoutButton.addEventListener("click", checkout);
    }
});

// Fungsi untuk menampilkan produk di keranjang
function displayCart() {
    const cartList = document.getElementById("cart-list");
    const totalValue = document.getElementById("total-value");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Cek apakah ada produk di keranjang
    if (cartList) {
        cartList.innerHTML = ""; // Clear list sebelum menambahkan ulang produk
    }

    let totalPrice = 0;

    // Loop untuk menambahkan setiap item dalam keranjang
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

        listItem.innerHTML = `
            <span>${item.nama}</span>
            <div>
                <button class="btn btn-sm btn-outline-secondary change-quantity" data-id="${item.id}" data-action="decrease">-</button>
                <span class="mx-2">${item.quantity}</span>
                <button class="btn btn-sm btn-outline-secondary change-quantity" data-id="${item.id}" data-action="increase">+</button>
            </div>
            <span class="fw-bold">Rp. ${item.harga * item.quantity}</span>
        `;

        cartList.appendChild(listItem);

        totalPrice += item.harga * item.quantity;
    });

    if (totalValue) {
        totalValue.textContent = `Rp. ${totalPrice}`;
    }

    const changeButtons = document.querySelectorAll('.change-quantity');
    changeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const id = parseInt(button.getAttribute("data-id"));
            const action = button.getAttribute("data-action");

            changeQuantity(id, action);
        });
    });
}

// Fungsi untuk mengubah kuantitas
function changeQuantity(id, action) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const productIndex = cart.findIndex(item => item.id === id);

    if (productIndex !== -1) {
        if (action === "increase") {
            cart[productIndex].quantity += 1;
        } else if (action === "decrease" && cart[productIndex].quantity > 1) {
            cart[productIndex].quantity -= 1;
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();  // Update keranjang setelah kuantitas berubah
    }
}

function addToCart(id, nama, harga) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const productIndex = cart.findIndex(item => item.id === id);

    if (productIndex === -1) {
        // Jika produk belum ada, tambahkan produk baru ke keranjang
        cart.push({
            id: id,
            nama: nama,
            harga: harga,
            quantity: 1
        });
    } else {
        // Jika produk sudah ada, tingkatkan kuantitasnya
        cart[productIndex].quantity += 1;
    }

    // Simpan kembali data keranjang ke localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Event listener untuk tombol "Tambah ke Keranjang"
document.addEventListener("DOMContentLoaded", function () {
    const addButtons = document.querySelectorAll('.add-to-cart');

    addButtons.forEach(button => {
        button.addEventListener('click', function () {
            const id = parseInt(button.getAttribute("data-id"));
            const nama = button.getAttribute("data-nama");
            const harga = parseFloat(button.getAttribute("data-harga"));  // Gunakan parseFloat untuk angka desimal

            if (!isNaN(harga)) {
                addToCart(id, nama, harga);
            } else {
                console.error('Harga tidak valid');
            }
        });
    });

    // Event listener untuk tombol checkout
    const checkoutButton = document.getElementById("checkout");
    if (checkoutButton) {
        checkoutButton.addEventListener("click", checkout);
    }
});

// Fungsi untuk melakukan checkout
function checkout() {
    // Tampilkan notifikasi checkout berhasil
    Swal.fire({
        title: 'Success!',
        text: 'Terimakasih telah berbelanja!',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            // Kosongkan keranjang hanya setelah checkout selesai
            localStorage.removeItem("cart");

            // Mengalihkan ke halaman utama setelah pengguna menekan tombol OK
            window.location.href = 'index.html'; // Mengalihkan ke halaman index.html
        }
    });
}

// Pastikan produk ditampilkan di halaman keranjang
if (window.location.pathname.includes("keranjang.html")) {
    displayCart();
}
