
function addToCart(id, nama, harga) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const productIndex = cart.findIndex(item => item.id === id);

    if (productIndex === -1) {

        cart.push({
            id: id,
            nama: nama,
            harga: harga,
            quantity: 1
        });
    } else {

        cart[productIndex].quantity += 1;
    }


    localStorage.setItem("cart", JSON.stringify(cart));


    window.location.href = "keranjang.html";
}


document.addEventListener("DOMContentLoaded", function () {
    const addButtons = document.querySelectorAll('.add-to-cart');

    addButtons.forEach(button => {
        button.addEventListener('click', function () {
            const id = parseInt(button.getAttribute("data-id"));
            const nama = button.getAttribute("data-nama");
            const harga = parseFloat(button.getAttribute("data-harga"));  

            if (!isNaN(harga)) {
                addToCart(id, nama, harga);
            } else {
                console.error('Harga tidak valid');
            }
        });
    });


    const addButtonModal = document.querySelector(".btntambahKeKeranjang");

    if (addButtonModal) {
        addButtonModal.addEventListener('click', function () {
            const id = parseInt(this.getAttribute("data-id"));
            const nama = this.getAttribute("data-nama");
            const harga = parseFloat(this.getAttribute("data-harga"));  

            if (!isNaN(harga)) {
                addToCart(id, nama, harga);
            } else {
                console.error('Harga tidak valid');
            }
        });
    }
});
