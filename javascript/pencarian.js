// Fungsi untuk mencari produk berdasarkan input pencarian
document.getElementById("search-input").addEventListener("input", function() {
    const searchQuery = this.value.toLowerCase(); // Ambil kata pencarian
    const products = document.querySelectorAll(".product"); // Ambil semua produk

    products.forEach(product => {
        const productName = product.getAttribute("data-nama").toLowerCase(); // Nama produk
        const productCategory = product.getAttribute("data-kategori").toLowerCase(); // Kategori produk

        // Jika nama atau kategori produk cocok dengan pencarian
        if (productName.includes(searchQuery) || productCategory.includes(searchQuery)) {
            product.style.display = "block"; // Tampilkan produk
        } else {
            product.style.display = "none"; // Sembunyikan produk
        }
    });
});
