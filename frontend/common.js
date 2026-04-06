function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let count = cart.reduce((total, item) => total + item.qty, 0);

    const cartElement = document.querySelector('.cart-count');
    if (cartElement) {
        cartElement.textContent = count;
    }
}

// Run when page loads
document.addEventListener("DOMContentLoaded", updateCartCount);

// Sync across tabs
window.addEventListener('storage', updateCartCount);


// for watchlist 
// ✅ Wishlist count update
// function updateWishlistCount() {
//     let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
//     let count = wishlist.length;

//     const wishlistElement = document.querySelector('.wishlist-count');
//     if (wishlistElement) {
//         wishlistElement.textContent = count;
//     }
// }

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    updateWishlistCount();
});

// Sync across tabs
window.addEventListener('storage', () => {
    updateCartCount();
    updateWishlistCount();
});