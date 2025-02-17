import React, { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import Transiton from '../../Transiton';

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    description: "High-quality wireless headphones with noise cancellation",
    shortDescription: "Wireless noise-canceling headphones"
  },
  {
    id: 2,
    name: "Smart Watch Series X",
    price: 299.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop",
    description: "Advanced smartwatch with health tracking",
    shortDescription: "Smartwatch with health tracking"
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 249.99,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=300&h=300&fit=crop",
    description: "Comfortable office chair with lumbar support",
    shortDescription: "Comfortable ergonomic chair"
  },
  {
    id: 4,
    name: "Professional DSLR Camera",
    price: 899.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop",
    description: "High-end digital camera for professional photography",
    shortDescription: "High-end DSLR camera"
  },
  {
    id: 5,
    name: "Minimalist Desk Lamp",
    price: 79.99,
    category: "Home & Garden",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop",
    description: "Modern LED desk lamp with adjustable brightness",
    shortDescription: "Sleek LED desk lamp"
  },
  {
    id: 6,
    name: "Leather Messenger Bag",
    price: 149.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    description: "Handcrafted leather bag for professionals",
    shortDescription: "Stylish leather messenger bag"
  },
  {
    id: 7,
    name: "Wireless Gaming Mouse",
    price: 89.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
    description: "High-precision gaming mouse with RGB lighting",
    shortDescription: "Wireless RGB gaming mouse"
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    price: 129.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=300&h=300&fit=crop",
    description: "RGB mechanical keyboard with Cherry MX switches",
    shortDescription: "Mechanical RGB keyboard"
  },
  {
    id: 9,
    name: "Smart Phones",
    price: 179.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=300&h=300&fit=crop",
    description: "Voice-controlled smart speaker with premium sound",
    shortDescription: "Smart assistant speaker"
  },
  {
    id: 10,
    name: "Fitness Tracker",
    price: 79.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=300&h=300&fit=crop",
    description: "Advanced fitness tracking with heart rate monitoring",
    shortDescription: "Fitness tracker with heart rate monitor"
  },
  {
    "id": 11,
    "name": "Headsets",
    "price": 499.99,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300&h=300&fit=crop",
    "description": "High-quality gaming headsets with surround sound."
  },
  {
    "id": 12,
    "name": "Apple Gadgets",
    "price": 1299.99,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
    "description": "Premium Apple devices with cutting-edge technology."
  },
  {
    "id": 13,
    "name": "Premium Headset",
    "price": 649.99,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=300&h=300&fit=crop",
    "description": "Professional-grade headset with crystal-clear audio."
  },
  {
    "id": 14,
    "name": "Premium Tablet",
    "price": 899.99,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=300&h=300&fit=crop",
    "description": "High-performance tablet for work and entertainment."
  },
  {
    "id": 15,
    "name": "Smart Watch Elite",
    "price": 349.99,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop",
    "description": "Luxury smartwatch with advanced health tracking."
  },
  {
    "id": 16,
    "name": "Modern Lamp Set",
    "price": 1499.99,
    "category": "Home & Garden",
    "image": "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=300&h=300&fit=crop",
    "description": "Sleek, modern lamps to brighten up your space."
  },
  {
    "id": 17,
    "name": "Beautiful Vases",
    "price": 199.99,
    "category": "Home & Garden",
    "image": "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=300&h=300&fit=crop",
    "description": "Elegant vases to enhance your home decor."
  },
  {
    "id": 18,
    "name": "Premium Furniture",
    "price": 129.99,
    "category": "Home & Garden",
    "image": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300&h=300&fit=crop",
    "description": "Stylish and durable furniture for modern homes."
  },
  {
    "id": 19,
    "name": "Designer Dining Set",
    "price": 899.99,
    "category": "Home & Garden",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300&h=300&fit=crop",
    "description": "Elegant dining set for a sophisticated dining experience."
  },
  {
    "id": 20,
    "name": "Luxury Furniture Suite",
    "price": 299.99,
    "category": "Home & Garden",
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&h=300&fit=crop",
    "description": "Premium luxury furniture for an upscale look."
  },
  {
    "id": 21,
    "name": "Luxury Chronograph Shoe",
    "price": 599.99,
    "category": "Fashion",
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=300&h=300&fit=crop",
    "description": "Elegant luxury shoes with a stylish chronograph design."
  },
  {
    "id": 22,
    "name": "Designer Bag",
    "price": 159.99,
    "category": "Fashion",
    "image": "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=300&h=300&fit=crop",
    "description": "Chic and spacious designer handbag for all occasions."
  },
  {
    "id": 23,
    "name": "Premium Leather Cap",
    "price": 399.99,
    "category": "Fashion",
    "image": "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=300&h=300&fit=crop",
    "description": "High-quality leather cap with a sleek and modern design."
  },
  {
    "id": 24,
    "name": "Diamond Pendant Necklace",
    "price": 999.99,
    "category": "Fashion",
    "image": "https://images.unsplash.com/photo-1582142306909-195724d33ffc?w=300&h=300&fit=crop",
    "description": "18K gold necklace featuring a stunning diamond pendant."
  },
  {
    "id": 25,
    "name": "Designer Shirts",
    "price": 249.99,
    "category": "Fashion",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=300&fit=crop",
    "description": "Stylish designer shirts crafted from premium fabrics."
  },
  {
    "id": 26,
    "name": "Pro Treadmill",
    "price": 1499.99,
    "category": "Sports & Outdoors",
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=300&h=300&fit=crop",
    "description": "High-end treadmill with advanced workout tracking."
  },
  {
    "id": 27,
    "name": "Swimming Kit",
    "price": 399.99,
    "category": "Sports & Outdoors",
    "image": "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=300&h=300&fit=crop",
    "description": "Complete swimming gear set for professionals and beginners."
  },
  {
    "id": 28,
    "name": "Treadmill",
    "price": 899.99,
    "category": "Sports & Outdoors",
    "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=300&fit=crop",
    "description": "Compact and powerful treadmill for home workouts."
  },
  {
    "id": 29,
    "name": "Premium Running Shoes",
    "price": 149.99,
    "category": "Sports & Outdoors",
    "image": "https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?w=300&h=300&fit=crop",
    "description": "High-performance running shoes with superior comfort."
  },
  {
    "id": 30,
    "name": "Pro Yoga Set",
    "price": 89.99,
    "category": "Sports & Outdoors",
    "image": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=300&fit=crop",
    "description": "Complete yoga set with premium mat and accessories."
  },
  {
    "id": 31,
    "name": "Luxury Skincare Set",
    "price": 199.99,
    "category": "Beauty & Personal Care",
    "image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop",
    "description": "A complete skincare set for radiant and healthy skin."
  },
  {
    "id": 32,
    "name": "Professional Makeup Kit",
    "price": 299.99,
    "category": "Beauty & Personal Care",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",
    "description": "Comprehensive makeup kit with high-quality cosmetics."
  },
  {
    "id": 33,
    "name": "Shoe",
    "price": 149.99,
    "category": "Fashion",
    "image": "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?w=300&h=300&fit=crop",
    "description": "Stylish and comfortable shoes for any occasion."
  },
  {
    "id": 34,
    "name": "Nice Fragrance Cream",
    "price": 129.99,
    "category": "Beauty & Personal Care",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
    "description": "Moisturizing cream infused with a delightful fragrance."
  },
  {
    "id": 35,
    "name": "Pro Beauty Tools Set",
    "price": 199.99,
    "category": "Beauty & Personal Care",
    "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&h=300&fit=crop",
    "description": "High-end beauty tools set for professional styling."
  }
 
];

function TopRated() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
           
            <Link to="/home" className="text-2xl flex justify-center items-center gap-1 font-bold text-gray-900 dark:text-gray-200 text-center">
             <img src={logo} className="w-6 h-6" alt="Logo"/>
              Shophere
            </Link>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-gray-600 hover:text-gray-900 dark:hover:text-white"
            >
              <ShoppingCart className="w-6 h-6 text-gray-900 dark:text-gray-200" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-blue-600 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop';
                }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="text-gray-700 w-5 h-5" />
              </button>
            </div>
            <div className="p-4 flex flex-col gap-4 h-[calc(100vh-180px)] overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center">Your cart is empty</p>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 border-b pb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 border rounded text-red-700"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 border rounded text-1xl text-red-700"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-red-600 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="border-t p-4 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total:</span>
                <span className="text-xl font-bold">${cartTotal.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700"
                disabled={cart.length === 0}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Transiton(TopRated);