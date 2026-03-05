// Product Data - 100+ products
const products = [
    // Fruits (30 products)
    { id: 1, name: "Organic Apples", category: "fruits", price: 4.99, rating: 4.8, image: "images/apple.avif", unit: "lb" },
    { id: 2, name: "Fresh Bananas", category: "fruits", price: 2.99, rating: 4.9, image: "images/banana.webp", unit: "lb" },
    { id: 3, name: "Ripe Strawberries", category: "fruits", price: 6.99, rating: 4.7, image: "images/strawberry.avif", unit: "box" },
    { id: 4, name: "Sweet Oranges", category: "fruits", price: 5.49, rating: 4.6, image: "images/oranges.avif", unit: "lb" },
    { id: 5, name: "Fresh Grapes", category: "fruits", price: 7.99, rating: 4.5, image: "images/grapes.avif", unit: "lb" },
    { id: 6, name: "Ripe Watermelon", category: "fruits", price: 8.99, rating: 4.8, image: "images/watermelon.avif", unit: "each" },
    { id: 7, name: "Fresh Pineapple", category: "fruits", price: 5.99, rating: 4.7, image: "images/grapes.avif", unit: "each" },
    { id: 8, name: "Organic Blueberries", category: "fruits", price: 8.49, rating: 4.9, image: "images/blueberry.avif", unit: "box" },
    { id: 9, name: "Sweet Peaches", category: "fruits", price: 6.49, rating: 4.6, image: "images/peches.avif", unit: "lb" },
    { id: 10, name: "Fresh Cherries", category: "fruits", price: 9.99, rating: 4.8, image: "images/cherry.webp", unit: "lb" },
    { id: 11, name: "Ripe Mango", category: "fruits", price: 3.99, rating: 4.7, image: "images/mango.avif", unit: "each" },
    { id: 12, name: "Fresh Kiwi", category: "fruits", price: 4.49, rating: 4.5, image: "images/kiwi.avif", unit: "lb" },
    { id: 13, name: "Sweet Pears", category: "fruits", price: 5.99, rating: 4.6, image: "images/pears.avif", unit: "lb" },
    { id: 14, name: "Fresh Lemon", category: "fruits", price: 3.49, rating: 4.8, image: "images/lemon.webp", unit: "lb" },
    { id: 15, name: "Organic Avocado", category: "fruits", price: 2.99, rating: 4.9, image: "images/avacado.webp", unit: "each" },
    { id: 16, name: "Fresh Coconut", category: "fruits", price: 4.99, rating: 4.5, image: "images/coconut.avif", unit: "each" },
    { id: 17, name: "Ripe Plums", category: "fruits", price: 5.49, rating: 4.6, image: "images/plums.avif", unit: "lb" },
    { id: 18, name: "Fresh Papaya", category: "fruits", price: 6.99, rating: 4.7, image: "images/papaya.avif", unit: "each" },
    { id: 19, name: "Sweet Melon", category: "fruits", price: 7.49, rating: 4.8, image: "images/melon.avif", unit: "each" },
    { id: 20, name: "Organic Raspberries", category: "fruits", price: 9.49, rating: 4.9, image: "images/raspberries.avif", unit: "box" },
    { id: 21, name: "Fresh Blackberries", category: "fruits", price: 8.99, rating: 4.7, image: "images/blueberry.avif", unit: "box" },
    { id: 22, name: "Sweet Tangerines", category: "fruits", price: 4.99, rating: 4.6, image: "images/tangerines.avif", unit: "lb" },
    { id: 23, name: "Ripe Grapefruit", category: "fruits", price: 5.49, rating: 4.5, image: "images/grapefruit.webp", unit: "each" },
    { id: 24, name: "Fresh Lime", category: "fruits", price: 3.99, rating: 4.8, image: "images/lemon.webp", unit: "lb" },
    { id: 25, name: "Organic Dates", category: "fruits", price: 11.99, rating: 4.9, image: "images/blueberry.avif", unit: "lb" },
    { id: 26, name: "Fresh Figs", category: "fruits", price: 10.99, rating: 4.7, image: "images/peches.avif", unit: "box" },
    { id: 27, name: "Sweet Pomegranate", category: "fruits", price: 6.99, rating: 4.8, image: "images/apple.avif", unit: "each" },
    { id: 28, name: "Fresh Dragon Fruit", category: "fruits", price: 7.99, rating: 4.6, image: "images/watermelon.avif", unit: "each" },
    { id: 29, name: "Ripe Passion Fruit", category: "fruits", price: 8.49, rating: 4.7, image: "images/oranges.avif", unit: "lb" },
    { id: 30, name: "Organic Star Fruit", category: "fruits", price: 9.99, rating: 4.5, image: "images/lemon.webp", unit: "lb" },

    // Vegetables (30 products)
    { id: 31, name: "Fresh Tomatoes", category: "vegetables", price: 3.99, rating: 4.8, image: "images/tomato.avif", unit: "lb" },
    { id: 32, name: "Organic Carrots", category: "vegetables", price: 2.99, rating: 4.9, image: "images/veg.avif", unit: "lb" },
    { id: 33, name: "Fresh Broccoli", category: "vegetables", price: 4.49, rating: 4.7, image: "images/broccoli.webp", unit: "lb" },
    { id: 34, name: "Green Lettuce", category: "vegetables", price: 3.49, rating: 4.6, image: "images/veg.avif", unit: "head" },
    { id: 35, name: "Fresh Spinach", category: "vegetables", price: 4.99, rating: 4.8, image: "images/veg.avif", unit: "bunch" },
    { id: 36, name: "Sweet Corn", category: "vegetables", price: 5.49, rating: 4.7, image: "images/veg.avif", unit: "lb" },
    { id: 37, name: "Fresh Cucumber", category: "vegetables", price: 2.49, rating: 4.9, image: "images/veg.avif", unit: "lb" },
    { id: 38, name: "Red Bell Pepper", category: "vegetables", price: 5.99, rating: 4.8, image: "images/veg.avif", unit: "lb" },
    { id: 39, name: "Fresh Eggplant", category: "vegetables", price: 3.99, rating: 4.5, image: "images/veg.avif", unit: "lb" },
    { id: 40, name: "Organic Potatoes", category: "vegetables", price: 3.49, rating: 4.7, image: "images/veg.avif", unit: "lb" },
    { id: 41, name: "Sweet Potatoes", category: "vegetables", price: 4.49, rating: 4.8, image: "images/veg.avif", unit: "lb" },
    { id: 42, name: "Fresh Onions", category: "vegetables", price: 2.99, rating: 4.6, image: "images/veg.avif", unit: "lb" },
    { id: 43, name: "Organic Garlic", category: "vegetables", price: 6.99, rating: 4.9, image: "images/veg.avif", unit: "lb" },
    { id: 44, name: "Fresh Mushrooms", category: "vegetables", price: 7.99, rating: 4.7, image: "images/veg.avif", unit: "lb" },
    { id: 45, name: "Green Peas", category: "vegetables", price: 4.99, rating: 4.6, image: "images/veg.avif", unit: "lb" },
    { id: 46, name: "Fresh Cauliflower", category: "vegetables", price: 5.49, rating: 4.8, image: "images/broccoli.webp", unit: "head" },
    { id: 47, name: "Brussels Sprouts", category: "vegetables", price: 6.49, rating: 4.5, image: "images/veg.avif", unit: "lb" },
    { id: 48, name: "Fresh Kale", category: "vegetables", price: 4.49, rating: 4.9, image: "images/veg.avif", unit: "bunch" },
    { id: 49, name: "Red Cabbage", category: "vegetables", price: 3.99, rating: 4.7, image: "images/veg.avif", unit: "head" },
    { id: 50, name: "Fresh Celery", category: "vegetables", price: 3.49, rating: 4.6, image: "images/veg.avif", unit: "bunch" },
    { id: 51, name: "Fresh Radish", category: "vegetables", price: 2.99, rating: 4.8, image: "images/tomato.avif", unit: "bunch" },
    { id: 52, name: "Fresh Beets", category: "vegetables", price: 4.49, rating: 4.7, image: "images/tomato.avif", unit: "lb" },
    { id: 53, name: "Green Beans", category: "vegetables", price: 5.49, rating: 4.9, image: "images/veg.avif", unit: "lb" },
    { id: 54, name: "Fresh Asparagus", category: "vegetables", price: 7.99, rating: 4.8, image: "images/veg.avif", unit: "lb" },
    { id: 55, name: "Fresh Zucchini", category: "vegetables", price: 3.99, rating: 4.6, image: "images/veg.avif", unit: "lb" },
    { id: 56, name: "Yellow Squash", category: "vegetables", price: 4.49, rating: 4.7, image: "images/lemon.webp", unit: "lb" },
    { id: 57, name: "Fresh Leeks", category: "vegetables", price: 5.99, rating: 4.5, image: "images/veg.avif", unit: "bunch" },
    { id: 58, name: "Fresh Parsley", category: "vegetables", price: 2.49, rating: 4.8, image: "images/veg.avif", unit: "bunch" },
    { id: 59, name: "Fresh Cilantro", category: "vegetables", price: 2.49, rating: 4.9, image: "images/veg.avif", unit: "bunch" },
    { id: 60, name: "Fresh Basil", category: "vegetables", price: 3.99, rating: 4.7, image: "images/veg.avif", unit: "bunch" },

    // Dairy (15 products)
    { id: 61, name: "Organic Whole Milk", category: "dairy", price: 5.99, rating: 4.9, image: "images/milk.avif", unit: "gallon" },
    { id: 62, name: "Greek Yogurt", category: "dairy", price: 4.99, rating: 4.8, image: "images/dairy.avif", unit: "32oz" },
    { id: 63, name: "Cheddar Cheese", category: "dairy", price: 7.99, rating: 4.7, image: "images/dairy.avif", unit: "lb" },
    { id: 64, name: "Fresh Butter", category: "dairy", price: 6.49, rating: 4.9, image: "images/dairy.avif", unit: "lb" },
    { id: 65, name: "Cream Cheese", category: "dairy", price: 4.49, rating: 4.6, image: "images/dairy.avif", unit: "8oz" },
    { id: 66, name: "Mozzarella Cheese", category: "dairy", price: 8.49, rating: 4.8, image: "images/dairy.avif", unit: "lb" },
    { id: 67, name: "Organic Eggs", category: "dairy", price: 6.99, rating: 4.9, image: "images/dairy.avif", unit: "dozen" },
    { id: 68, name: "Sour Cream", category: "dairy", price: 3.99, rating: 4.7, image: "images/dairy.avif", unit: "16oz" },
    { id: 69, name: "Heavy Cream", category: "dairy", price: 5.49, rating: 4.8, image: "images/dairy.avif", unit: "pint" },
    { id: 70, name: "Cottage Cheese", category: "dairy", price: 4.99, rating: 4.6, image: "images/dairy.avif", unit: "16oz" },
    { id: 71, name: "Parmesan Cheese", category: "dairy", price: 9.99, rating: 4.9, image: "images/dairy.avif", unit: "lb" },
    { id: 72, name: "Goat Cheese", category: "dairy", price: 8.99, rating: 4.7, image: "images/dairy.avif", unit: "8oz" },
    { id: 73, name: "Almond Milk", category: "dairy", price: 4.49, rating: 4.8, image: "images/dairy.avif", unit: "half gal" },
    { id: 74, name: "Oat Milk", category: "dairy", price: 4.99, rating: 4.9, image: "images/dairy.avif", unit: "half gal" },
    { id: 75, name: "Feta Cheese", category: "dairy", price: 7.49, rating: 4.6, image: "images/dairy.avif", unit: "8oz" },

    // Bakery (10 products)
    { id: 76, name: "Sourdough Bread", category: "bakery", price: 5.99, rating: 4.9, image: "images/bread.avif", unit: "loaf" },
    { id: 77, name: "Whole Wheat Bread", category: "bakery", price: 4.99, rating: 4.8, image: "images/bread.avif", unit: "loaf" },
    { id: 78, name: "Fresh Croissants", category: "bakery", price: 7.99, rating: 4.7, image: "images/bakery.avif", unit: "6 pack" },
    { id: 79, name: "Bagels", category: "bakery", price: 5.49, rating: 4.8, image: "images/bakery.avif", unit: "6 pack" },
    { id: 80, name: "English Muffins", category: "bakery", price: 4.49, rating: 4.6, image: "images/bread.avif", unit: "6 pack" },
    { id: 81, name: "Dinner Rolls", category: "bakery", price: 4.99, rating: 4.9, image: "images/bread.avif", unit: "12 pack" },
    { id: 82, name: "Ciabatta Bread", category: "bakery", price: 6.49, rating: 4.7, image: "images/bread.avif", unit: "loaf" },
    { id: 83, name: "Multigrain Bread", category: "bakery", price: 5.49, rating: 4.8, image: "images/bread.avif", unit: "loaf" },
    { id: 84, name: "Baguette", category: "bakery", price: 3.99, rating: 4.9, image: "images/bread.avif", unit: "each" },
    { id: 85, name: "Pita Bread", category: "bakery", price: 4.49, rating: 4.6, image: "images/bread.avif", unit: "pack" },

    // Meat & Seafood (10 products)
    { id: 86, name: "Organic Chicken Breast", category: "meat", price: 12.99, rating: 4.8, image: "images/meat.avif", unit: "lb" },
    { id: 87, name: "Grass-Fed Beef", category: "meat", price: 16.99, rating: 4.9, image: "images/meat.avif", unit: "lb" },
    { id: 88, name: "Fresh Salmon", category: "meat", price: 18.99, rating: 4.8, image: "images/seafood.avif", unit: "lb" },
    { id: 89, name: "Wild Shrimp", category: "meat", price: 19.99, rating: 4.7, image: "images/seafood.avif", unit: "lb" },
    { id: 90, name: "Ground Turkey", category: "meat", price: 9.99, rating: 4.6, image: "images/meat.avif", unit: "lb" },
    { id: 91, name: "Pork Chops", category: "meat", price: 11.99, rating: 4.8, image: "images/meat.avif", unit: "lb" },
    { id: 92, name: "Fresh Tuna", category: "meat", price: 20.99, rating: 4.9, image: "images/seafood.avif", unit: "lb" },
    { id: 93, name: "Lamb Chops", category: "meat", price: 22.99, rating: 4.7, image: "images/meat.avif", unit: "lb" },
    { id: 94, name: "Bacon", category: "meat", price: 8.99, rating: 4.8, image: "images/meat.avif", unit: "lb" },
    { id: 95, name: "Fresh Cod", category: "meat", price: 15.99, rating: 4.6, image: "images/seafood.avif", unit: "lb" },

    // Beverages (10 products)
    { id: 96, name: "Orange Juice", category: "beverages", price: 5.99, rating: 4.8, image: "images/juice.avif", unit: "half gal" },
    { id: 97, name: "Apple Juice", category: "beverages", price: 4.99, rating: 4.7, image: "images/juice.avif", unit: "half gal" },
    { id: 98, name: "Green Tea", category: "beverages", price: 6.99, rating: 4.9, image: "images/juice.avif", unit: "box" },
    { id: 99, name: "Coffee Beans", category: "beverages", price: 12.99, rating: 4.8, image: "images/juice.avif", unit: "lb" },
    { id: 100, name: "Sparkling Water", category: "beverages", price: 5.49, rating: 4.6, image: "images/juice.avif", unit: "12 pack" },
    { id: 101, name: "Coconut Water", category: "beverages", price: 7.99, rating: 4.7, image: "images/coconut.avif", unit: "6 pack" },
    { id: 102, name: "Aloe Vera Juice", category: "beverages", price: 8.49, rating: 4.5, image: "images/juice.avif", unit: "bottle" },
    { id: 103, name: "Cranberry Juice", category: "beverages", price: 6.49, rating: 4.8, image: "images/juice.avif", unit: "half gal" },
    { id: 104, name: "Herbal Tea", category: "beverages", price: 5.99, rating: 4.9, image: "images/juice.avif", unit: "box" },
    { id: 105, name: "Kombucha", category: "beverages", price: 4.49, rating: 4.7, image: "images/juice.avif", unit: "bottle" }
];

// Generate product cards
function generateProductCards() {
    const catalog = document.getElementById('productsCatalog');
    catalog.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-catalog-card';
        card.setAttribute('data-category', product.category);
        card.setAttribute('data-price', product.price);
        card.setAttribute('data-rating', product.rating);
        card.setAttribute('data-name', product.name.toLowerCase());

        const stars = generateStars(product.rating);

        card.innerHTML = `
            <div class="product-img"><img src="${product.image}" alt="${product.name}"></div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">${stars} <span>(${product.rating})</span></div>
                <div class="product-price-section">
                    <span class="product-price">$${product.price}</span>
                    <span class="product-unit">/${product.unit}</span>
                </div>
                <button class="btn-buy" onclick="buyProduct(${product.id})">Buy Now</button>
            </div>
        `;

        catalog.appendChild(card);
    });

    updateProductCount();
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (hasHalfStar) {
        stars += '☆';
    }
    while (stars.length < 5) {
        stars += '☆';
    }

    return stars;
}

// Buy product function - redirects to 404
function buyProduct(productId) {
    window.location.href = '404.html';
}

// Filter by category
document.getElementById('categoryFilter').addEventListener('change', function() {
    const selectedCategory = this.value;
    const cards = document.querySelectorAll('.product-catalog-card');

    cards.forEach(card => {
        if (selectedCategory === 'all' || card.getAttribute('data-category') === selectedCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    updateProductCount();
});

// Sort products
document.getElementById('sortFilter').addEventListener('change', function() {
    const sortValue = this.value;
    const catalog = document.getElementById('productsCatalog');
    const cards = Array.from(document.querySelectorAll('.product-catalog-card'));

    cards.sort((a, b) => {
        switch(sortValue) {
            case 'price-low':
                return parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price'));
            case 'price-high':
                return parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price'));
            case 'rating':
                return parseFloat(b.getAttribute('data-rating')) - parseFloat(a.getAttribute('data-rating'));
            default:
                return 0;
        }
    });

    catalog.innerHTML = '';
    cards.forEach(card => catalog.appendChild(card));
});

// Search products
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const cards = document.querySelectorAll('.product-catalog-card');

    cards.forEach(card => {
        const productName = card.getAttribute('data-name');
        if (productName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    updateProductCount();
});

// Update product count
function updateProductCount() {
    const visibleCards = document.querySelectorAll('.product-catalog-card[style="display: block;"], .product-catalog-card:not([style*="display: none"])');
    const count = Array.from(visibleCards).filter(card => {
        return card.style.display !== 'none';
    }).length;
    
    document.getElementById('productCount').textContent = count;
}

// Initialize products on page load
document.addEventListener('DOMContentLoaded', function() {
    generateProductCards();
});
