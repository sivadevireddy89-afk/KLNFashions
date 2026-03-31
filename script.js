// Sample Product Data - Women & Kids Indian Clothing
const products = [
    {
        id: 1,
        name: "Printed Anarkali Kurta",
        category: "women",
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.8,
        reviews: 324,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=600&fit=crop",
        description: "Elegant printed Anarkali kurta with beautiful floral motifs. Features a flared silhouette and intricate embroidery. Perfect for festive occasions and casual gatherings. Made from soft cotton blend fabric for all-day comfort."
    },
    {
        id: 2,
        name: "Boys' Kurta Pajama Set",
        category: "kids",
        price: 45.00,
        rating: 4.9,
        reviews: 189,
        badge: "new",
        image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&h=600&fit=crop",
        description: "Traditional kurta pajama set for young boys. Crafted from breathable cotton fabric with elegant collar and button details. Perfect for festivals, weddings, and special occasions."
    },
    {
        id: 3,
        name: "Banarasi Silk Saree",
        category: "women",
        price: 178.00,
        rating: 4.9,
        reviews: 567,
        badge: "new",
        image: "https://images.unsplash.com/photo-1603112155264-95b623720103?w=600&h=600&fit=crop",
        description: "Luxurious Banarasi silk saree with intricate zari work. Rich golden borders and traditional motifs. Perfect for weddings and grand celebrations. A timeless piece for your collection."
    },
    {
        id: 4,
        name: "Girls' Lehenga Choli",
        category: "kids",
        price: 68.99,
        rating: 4.8,
        reviews: 245,
        badge: "new",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&h=600&fit=crop",
        description: "Beautiful lehenga choli set for little princesses. Features vibrant colors, sequin work, and comfortable fit. Perfect for weddings, festivals, and celebrations. Comes with matching dupatta."
    },
    {
        id: 5,
        name: "Cotton Embroidered Kurta",
        category: "women",
        price: 59.00,
        originalPrice: 79.00,
        rating: 4.7,
        reviews: 412,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=600&fit=crop",
        description: "Stylish cotton kurta with delicate hand embroidery. Features side slits and round neckline. Comfortable for daily wear yet elegant enough for office and casual outings."
    },
    {
        id: 6,
        name: "Kids' Ethnic Wear Combo",
        category: "kids",
        price: 55.00,
        rating: 4.6,
        reviews: 678,
        image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=600&fit=crop",
        description: "Set of 2 traditional kurtas for boys in festive colors. Soft cotton fabric with traditional collar and button details. Perfect for Diwali, Eid, and family gatherings."
    },
    {
        id: 7,
        name: "Salwar Kameez Set",
        category: "women",
        price: 85.00,
        rating: 4.8,
        reviews: 298,
        image: "https://images.unsplash.com/photo-1583391733958-2554edeb4632?w=600&h=600&fit=crop",
        description: "Classic salwar kameez set with matching dupatta. Features beautiful prints and comfortable straight cut. Perfect blend of tradition and comfort for everyday elegance."
    },
    {
        id: 8,
        name: "Designer Lehenga",
        category: "women",
        price: 245.00,
        rating: 4.9,
        reviews: 334,
        badge: "new",
        image: "https://images.unsplash.com/photo-1610030467081-8bb8a3d65d26?w=600&h=600&fit=crop",
        description: "Exquisite designer lehenga with heavy embroidery and stone work. Features a matching choli and sheer dupatta. Ideal for weddings, receptions, and grand celebrations."
    },
    {
        id: 9,
        name: "Embroidered Dupatta",
        category: "accessories",
        price: 35.00,
        rating: 4.7,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=600&fit=crop",
        description: "Elegant embroidered dupatta in vibrant colors. Features intricate handwork and traditional designs. Perfect for pairing with plain kurtas and adding a touch of elegance."
    },
    {
        id: 10,
        name: "Mom & Daughter Matching Lehengas",
        category: "women",
        price: 189.00,
        rating: 4.9,
        reviews: 523,
        badge: "new",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop",
        description: "Twin with your little one in these matching lehenga sets. Coordinated designs with beautiful embroidery. Create beautiful memories at weddings and festivals."
    },
    {
        id: 11,
        name: "Traditional Potli Bag",
        category: "accessories",
        price: 38.99,
        rating: 4.8,
        reviews: 445,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop",
        description: "Traditional embroidered potli bag with drawstring closure. Features intricate beadwork and traditional Indian motifs. Perfect accessory for ethnic wear and special occasions."
    },
    {
        id: 12,
        name: "Chikankari Kurta Set",
        category: "women",
        price: 95.00,
        originalPrice: 125.00,
        rating: 4.8,
        reviews: 389,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=600&fit=crop",
        description: "Elegant Lucknowi Chikankari kurta with delicate hand embroidery. Comes with matching palazzo pants and dupatta. Soft cotton fabric perfect for summer celebrations."
    },
    {
        id: 13,
        name: "Baby Ethnic Dress",
        category: "kids",
        price: 42.00,
        rating: 4.9,
        reviews: 567,
        badge: "new",
        image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&h=600&fit=crop",
        description: "Adorable ethnic dress for baby girls with traditional embroidery. Soft fabric with comfortable fit. Perfect for first festivals and family photoshoots."
    },
    {
        id: 14,
        name: "Kundan Jewelry Set",
        category: "accessories",
        price: 88.00,
        rating: 4.8,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=600&h=600&fit=crop",
        description: "Traditional Kundan jewelry set with necklace and earrings. Features intricate craftsmanship and traditional Indian design. Perfect for weddings and festive occasions."
    },
    {
        id: 15,
        name: "Kids' Traditional Jacket",
        category: "kids",
        price: 48.99,
        rating: 4.7,
        reviews: 312,
        image: "https://images.unsplash.com/photo-1610384104075-e5394d162a88?w=600&h=600&fit=crop",
        description: "Stylish ethnic jacket for kids with embroidered details. Can be paired with kurta for a complete traditional look. Perfect for winter weddings and festive occasions."
    }
];

// Categories
const categories = [
    { name: "Women's Fashion", slug: "women", image: "https://raw.githubusercontent.com/sivadevireddy89-afk/KLNFashions/main/Images/gcpksslsaa0203__1.jpeg", count: 86 },
    { name: "Kids' Fashion", slug: "kids", image: "https://raw.githubusercontent.com/sivadevireddy89-afk/KLNFashions/main/Images/gcajbackw006-0-1m__2.jpeg", count: 124 },
    { name: "Accessories", slug: "accessories", image: "https://raw.githubusercontent.com/sivadevireddy89-afk/KLNFashions/main/Images/gcalocosta011134.jpeg", count: 45 },
    { name: "New Arrivals", slug: "all", image: "https://raw.githubusercontent.com/sivadevireddy89-afk/KLNFashions/main/Images/gcalocosta0111__1.jpeg", count: 255 }
];

// Cart State
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const categoriesGrid = document.getElementById('categoriesGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartBadge = document.getElementById('cartBadge');
const cartTotal = document.getElementById('cartTotal');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const productModal = document.getElementById('productModal');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutTotal = document.getElementById('checkoutTotal');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderShopByCategories();
    renderNewArrivals();
    renderProducts('all');
    updateCartUI();
    setupEventListeners();
});

// Render Shop By Categories
function renderShopByCategories() {
    const shopByCategory = document.getElementById('shopByCategory');
    shopByCategory.innerHTML = categories.slice(0, 4).map(cat => `
        <a href="#products" class="shop-by-card" onclick="filterByCategory('${cat.slug}')">
            <img src="${cat.image}" alt="${cat.name}" loading="lazy">
            <div class="shop-by-overlay">
                <span class="shop-by-name">${cat.name}</span>
                <span class="shop-by-count">${cat.count} products</span>
            </div>
        </a>
    `).join('');
}

// Render New Arrivals
function renderNewArrivals() {
    const newArrivals = document.getElementById('newArrivals');
    const newProducts = products.filter(p => p.badge === 'new').slice(0, 5);
    
    newArrivals.innerHTML = newProducts.map(product => `
        <div class="product-card-compact" onclick="openProductModal(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <span class="product-badge ${product.badge}">${product.badge}</span>
                <span class="shipping-badge">⚡ Ships 24h</span>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    <span class="price-current">$${product.price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Handpicked Collections
function renderHandpickedCollections() {
    const handpickedCollections = document.getElementById('handpickedCollections');
    const collections = [
        { name: "Mom & Me Matching", desc: "Twin in ethnic style", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop", filter: "matching" },
        { name: "Sustainable Kurta Collection", desc: "Eco-friendly cotton kurtas", image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop", filter: "sustainable" },
        { name: "Wedding Special", desc: "Grand lehengas & sarees", image: "https://images.unsplash.com/photo-1610030467081-8bb8a3d65d26?w=600&h=400&fit=crop", filter: "party" }
    ];
    
    handpickedCollections.innerHTML = collections.map(col => `
        <div class="collection-card" onclick="filterByTag('${col.filter}')">
            <img src="${col.image}" alt="${col.name}" loading="lazy">
            <div class="collection-overlay">
                <span class="collection-title">${col.name}</span>
                <span class="collection-desc">${col.desc}</span>
            </div>
        </div>
    `).join('');
}

// Filter by Tag
function filterByTag(tag) {
    // Scroll to products section
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    
    // Show toast
    showToast(`Showing ${tag} collection`);
    
    // For demo purposes, just show all products
    // In a real app, this would filter by the tag
}

// Render Categories (deprecated, keeping for compatibility)
function renderCategories() {
    renderShopByCategories();
}

// Render Products
function renderProducts(filter) {
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);
    
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge}</span>` : ''}
                <button class="product-quick-add" onclick="event.stopPropagation(); addToCart(${product.id})" title="Quick Add">
                    🛒
                </button>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    ${renderStars(product.rating)}
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="price-current">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Render Stars
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<span class="star">★</span>';
    }
    if (hasHalfStar) {
        stars += '<span class="star">½</span>';
    }
    
    return stars;
}

// Filter by Category
function filterByCategory(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        }
    });
    renderProducts(category);
}

// Add to Cart
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartUI();
    showToast(`${product.name} added to cart!`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Update Quantity
function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// Clear Cart
function clearCart() {
    cart = [];
    saveCart();
    updateCartUI();
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update Cart UI
function updateCartUI() {
    // Update badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    
    // Calculate total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
    checkoutTotal.textContent = `$${total.toFixed(2)}`;
    
    // Render cart items
    if (cart.length === 0) {
        cartEmpty.classList.add('show');
        cartFooter.classList.remove('show');
        cartItems.innerHTML = '';
    } else {
        cartEmpty.classList.remove('show');
        cartFooter.classList.add('show');
        
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">🗑️</button>
            </div>
        `).join('');
    }
}

// Open Cart
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Cart
function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Open Product Modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <div class="product-modal-content">
            <div class="product-modal-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-modal-info">
                <span class="product-category">${product.category}</span>
                <h2>${product.name}</h2>
                <div class="product-rating">
                    ${renderStars(product.rating)}
                    <span class="rating-count">(${product.reviews} reviews)</span>
                </div>
                <div class="product-modal-price">
                    $${product.price.toFixed(2)}
                    ${product.originalPrice ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <p class="product-modal-desc">${product.description}</p>
                <div class="product-modal-actions">
                    <button class="btn btn-primary btn-large" onclick="addToCart(${product.id}); closeProductModal();">
                        Add to Cart
                    </button>
                    <button class="btn btn-outline btn-large" onclick="closeProductModal()">
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    `;
    
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Product Modal
function closeProductModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Open Checkout
function openCheckout() {
    if (cart.length === 0) return;
    closeCart();
    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Checkout
function closeCheckout() {
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Show Toast
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Setup Event Listeners
function setupEventListeners() {
    // Cart toggle
    document.getElementById('cartBtn').addEventListener('click', openCart);
    document.getElementById('cartClose').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);
    document.getElementById('startShoppingBtn').addEventListener('click', closeCart);
    
    // Clear cart
    document.getElementById('clearCartBtn').addEventListener('click', () => {
        if (confirm('Clear your cart?')) {
            clearCart();
        }
    });
    
    // Checkout
    document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
    document.getElementById('checkoutClose').addEventListener('click', closeCheckout);
    
    // Product modal close
    document.getElementById('modalClose').addEventListener('click', closeProductModal);
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeProductModal();
    });
    
    // Checkout modal close
    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) closeCheckout();
    });
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.filter);
        });
    });
    
    // Checkout form
    document.getElementById('checkoutForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate checkout
        const btn = e.target.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Processing...';
        btn.disabled = true;
        
        setTimeout(() => {
            closeCheckout();
            clearCart();
            showToast('Order placed successfully! 🎉');
            btn.textContent = originalText;
            btn.disabled = false;
            e.target.reset();
        }, 2000);
    });
    
    // Mobile menu
    document.getElementById('menuToggle').addEventListener('click', () => {
        document.querySelector('.nav').classList.toggle('mobile-active');
    });
    
    // Gallery navigation
    const gallerySlider = document.getElementById('gallerySlider');
    const galleryPrev = document.getElementById('galleryPrev');
    const galleryNext = document.getElementById('galleryNext');
    
    if (gallerySlider && galleryPrev && galleryNext) {
        const scrollAmount = 324; // card width (300) + gap (24)
        
        galleryPrev.addEventListener('click', () => {
            gallerySlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        
        galleryNext.addEventListener('click', () => {
            gallerySlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }
    
    // Slideshow functionality
    const slides = document.querySelectorAll('.slide');
    const slideDots = document.querySelectorAll('.slide-dot');
    const slidePrev = document.getElementById('slidePrev');
    const slideNext = document.getElementById('slideNext');
    let currentSlide = 0;
    let slideInterval;
    
    console.log('Slideshow init:', { slides: slides.length, dots: slideDots.length, prev: slidePrev, next: slideNext });
    
    function showSlide(index) {
        console.log('Showing slide:', index);
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            slideDots[i].classList.remove('active');
        });
        
        slides[index].classList.add('active');
        slideDots[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        console.log('Next slide:', next);
        showSlide(next);
    }
    
    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        console.log('Prev slide:', prev);
        showSlide(prev);
    }
    
    function startSlideShow() {
        console.log('Starting slideshow');
        slideInterval = setInterval(nextSlide, 4000); // Auto-advance every 4 seconds
    }
    
    function stopSlideShow() {
        console.log('Stopping slideshow');
        clearInterval(slideInterval);
    }
    
    if (slides.length > 0) {
        console.log('Slides found, setting up events');
        // Navigation arrows
        if (slidePrev) {
            slidePrev.addEventListener('click', () => {
                console.log('Prev clicked');
                stopSlideShow();
                prevSlide();
                startSlideShow();
            });
        }
        
        if (slideNext) {
            slideNext.addEventListener('click', () => {
                console.log('Next clicked');
                stopSlideShow();
                nextSlide();
                startSlideShow();
            });
        }
        
        // Navigation dots
        slideDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                console.log('Dot clicked:', index);
                stopSlideShow();
                showSlide(index);
                startSlideShow();
            });
        });
        
        // Start auto-play
        startSlideShow();
        
        // Pause on hover
        const slideshow = document.querySelector('.slideshow');
        if (slideshow) {
            slideshow.addEventListener('mouseenter', stopSlideShow);
            slideshow.addEventListener('mouseleave', startSlideShow);
        }
    } else {
        console.log('No slides found!');
    }
    
    // Search button (placeholder)
    document.getElementById('searchBtn').addEventListener('click', () => {
        showToast('Search feature coming soon!');
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCart();
        closeProductModal();
        closeCheckout();
    }
});
