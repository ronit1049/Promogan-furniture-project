// // Products Data
// const products = [
//     { id: 1, name: 'Nordic Lounge Sofa', cat: 'sofa', category: 'Living Room', price: 45999, old: 62000, rating: 4.8, reviews: 124, badge: 'Best Seller', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80' },
//     { id: 2, name: 'Walnut Dining Table', cat: 'table', category: 'Dining Room', price: 32500, old: 41000, rating: 4.7, reviews: 89, badge: 'New', img: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500&q=80' },
//     { id: 3, name: 'Cloud King Bed', cat: 'bed', category: 'Bedroom', price: 58000, old: 75000, rating: 4.9, reviews: 203, badge: 'Top Rated', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&q=80' },
//     { id: 4, name: 'Ergonomic Mesh Chair', cat: 'chair', category: 'Office', price: 18999, old: 24000, rating: 4.6, reviews: 67, badge: 'Sale', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80' },
//     { id: 5, name: 'Scandinavian Armchair', cat: 'chair', category: 'Living Room', price: 22500, old: 28000, rating: 4.8, reviews: 45, badge: 'New', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&q=80' },
//     { id: 6, name: 'Marble Coffee Table', cat: 'table', category: 'Living Room', price: 14999, old: 19000, rating: 4.5, reviews: 58, badge: '', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&q=80' },
//     { id: 7, name: 'Japandi Platform Bed', cat: 'bed', category: 'Bedroom', price: 43000, old: 54000, rating: 4.7, reviews: 91, badge: 'Sale', img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80' },
//     { id: 8, name: 'Velvet 3-Seater Sofa', cat: 'sofa', category: 'Living Room', price: 38500, old: 49000, rating: 4.9, reviews: 177, badge: 'Best Seller', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&q=80' },
// ];

// let currentFilter = 'all';

// function renderProducts(filter) {
//     const grid = document.getElementById('productsGrid');

//     const filtered = filter === 'all'
//         ? products
//         : products.filter(p => p.cat === filter);

//     grid.innerHTML = filtered.map(p => `
//     <div class="product-card fade-up">

//       <div class="product-img" onclick="openProduct(${p.id})" style="cursor:pointer;">
//         <img src="${p.img}" alt="${p.name}" />
//         ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
//         <button class="product-wishlist">♡</button>
//       </div>

//       <div class="product-info">
//         <div class="product-category">${p.category}</div>
//         <div class="product-name">${p.name}</div>

//         <div class="product-footer">
//           <div class="product-price">₹${p.price}</div>

//             <div class="qty-box">
//             <button onclick="changeQty(${p.id}, -1)">−</button>
//             <span id="qty-${p.id}">0</span>
//             <button onclick="changeQty(${p.id}, 1)">+</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   `).join('');
// }

// function changeQty(productId, change) {

//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     const product = products.find(p => p.id == productId);
//     let existing = cart.find(item => item.id === productId);

//     if (existing) {
//         existing.qty += change;

//         if (existing.qty <= 0) {
//             cart = cart.filter(item => item.id !== productId);
//         }
//     }
//     else if (change > 0) {
//         cart.push({
//             id: product.id,
//             name: product.name,
//             price: product.price,
//             img: product.img,
//             qty: 1
//         });
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));

//     updateCartCount();
//     updateAllProductQty();
// }

// function openProduct(id) {
//     window.location.href = `product.html?id=${id}`;
// }

// function filterProducts(btn, filter) {
//     document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
//     btn.classList.add('active');
//     currentFilter = filter;
//     renderProducts(filter);
// }

// // Toast
// let toastTimer;
// function addToCart(productId) {

//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     const product = products.find(p => p.id == productId);

//     const existing = cart.find(item => item.id === productId);

//     if (existing) {
//         existing.qty += 1;
//     } else {
//         cart.push({
//             id: product.id,
//             name: product.name,
//             price: product.price,
//             img: product.img,
//             qty: 1
//         });
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));

//     // Toast message
//     const toast = document.getElementById('toast');
//     toast.textContent = `🛒 "${product.name}" added to cart!`;
//     toast.classList.add('show');

//     setTimeout(() => toast.classList.remove('show'), 2000);

//     updateCartCount();
// }

// Newsletter
function handleNewsletter(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = '✓ Subscribed!';
    btn.style.background = '#3aad6b';
    e.target.querySelector('input').value = '';
    setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.background = ''; }, 3000);
}

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
function observeAll() {
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// Nav scroll effect
window.addEventListener('scroll', () => {
    document.getElementById('navbar').style.boxShadow = window.scrollY > 50 ? '0 4px 20px rgba(0,0,0,.08)' : 'none';
});

// // Wishlist toggle
// document.addEventListener('click', e => {

//     if (e.target.classList.contains('product-wishlist')) {

//         const btn = e.target;
//         const card = btn.closest('.product-card');

//         const productId = parseInt(card.querySelector('.product-img').getAttribute('onclick').match(/\d+/)[0]);

//         let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

//         const exists = wishlist.find(item => item.id === productId);

//         if (exists) {
//             // REMOVE
//             wishlist = wishlist.filter(item => item.id !== productId);
//             btn.textContent = '♡';
//             btn.style.color = '';
//         } else {
//             // ADD
//             const product = products.find(p => p.id === productId);
//             wishlist.push(product);

//             btn.textContent = '♥';
//             btn.style.color = 'red';
//         }

//         localStorage.setItem('wishlist', JSON.stringify(wishlist));

//         updateWishlistCount();
//     }

// });

// Init
// renderProducts('all');
observeAll();
// updateAllProductQty();

// Trigger initial animations
setTimeout(() => {
    document.querySelectorAll('.fade-up').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) el.classList.add('visible');
    });
}, 100);

// Hide header when scrolling down, show when scrolling up
let lastScroll = 0;
const topWrapper = document.getElementById("topWrapper");

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scroll Down
        topWrapper.classList.add("hide");
    }
    else {
        // Scroll Up
        topWrapper.classList.remove("hide");
    }

    lastScroll = currentScroll;

});

// Scroll to top
const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Show / Hide scroll buttons
const scrollUpBtn = document.getElementById("backToTop");
const scrollDownBtn = document.getElementById("scrollDown");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    // Show UP button when user scrolls down
    if (scrollTop > 200) {
        scrollUpBtn.classList.add("show");
    } else {
        scrollUpBtn.classList.remove("show");
    }

    // Hide DOWN button at bottom
    if (scrollTop + windowHeight >= pageHeight - 10) {
        scrollDownBtn.style.display = "none";
    } else {
        scrollDownBtn.style.display = "flex";
    }

});

// function updateCartCount() {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     let count = cart.reduce((total, item) => total + item.qty, 0);

//     document.querySelector('.cart-count').textContent = count;
// }

// For Featured Products 
// function updateAllProductQty() {

//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     products.forEach(p => {
//         const item = cart.find(i => i.id === p.id);
//         const qtyEl = document.getElementById(`qty-${p.id}`);

//         if (qtyEl) {
//             qtyEl.textContent = item ? item.qty : 0;
//         }
//     });
// }

// // Run on page load
// updateCartCount();

// HERO SLIDER
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
}

document.getElementById("nextSlide").onclick = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
};

document.getElementById("prevSlide").onclick = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
};

// Auto slide
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// MOBILE NAV TOGGLE
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");
const closeMenu = document.getElementById("closeMenu");

// OPEN MENU
hamburger.addEventListener("click", () => {
    navMenu.classList.add("active");
});

// CLOSE MENU
closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("active");
});

//for login 
document.addEventListener("DOMContentLoaded", async () => {

    const userText = document.getElementById("userText")
    const userTrigger = document.getElementById("userTrigger")
    const adminPanelLink = document.getElementById("adminPanelLink")

    let isLoggedIn = false

    // check auth from backend
    try {
        const res = await fetch("http://localhost:8000/auth/me", {
            credentials: "include"
        })

        const data = await res.json()
        if (data.isLoggedIn) {
            isLoggedIn = true,
            userText.textContent = "Account"

            // role check
            if(data.user.role === "admin") {
                adminPanelLink.style.display = "inline-flex"
            }

        } else {
            userText.textContent = "Login"
        }
    } catch (err) {
        console.error(err)
        userText.textContent = "Login"
    }

    // click behavior
    userTrigger.addEventListener("click", (e) => {
        e.stopPropagation()

        if (!isLoggedIn) {
            window.location.href = "./auth/signin.html"
        } else {
            window.location.href = "./account.html"
        }
    })

    adminPanelLink.addEventListener("click", (e) => {
        e.preventDefault()
        window.open("./admin/admin-panel.html", "_blank")
    })
});