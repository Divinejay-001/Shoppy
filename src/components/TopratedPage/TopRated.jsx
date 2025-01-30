import React, { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    id: 2,
    name: "Smart Watch Series X",
    price: 299.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop",
    description: "Advanced smartwatch with health tracking"
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 249.99,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=300&h=300&fit=crop",
    description: "Comfortable office chair with lumbar support"
  },
  // ... continuing with more products
  {
    id: 98,
    name: "Vintage Leather Wallet",
    price: 49.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=300&h=300&fit=crop",
    description: "Handcrafted genuine leather wallet"
  },
  {
    id: 99,
    name: "Smart Home Security Camera",
    price: 129.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=300&h=300&fit=crop",
    description: "HD security camera with night vision"
  },
  {
    id: 100,
    name: "Portable Power Bank",
    price: 39.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1609592424825-fe0d0f3d0ce8?w=300&h=300&fit=crop",
    description: "20000mAh high-capacity power bank"
  }
].concat(
  // Generate additional products programmatically
  Array.from({ length: 94 }, (_, i) => ({
    id: i + 4,
    name: `Product ${i + 4}`,
    price: Math.round(Math.random() * 200 + 9.99),
    category: ['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books'][Math.floor(Math.random() * 5)],
    image: `https://images.unsplash.com/photo-${1550000000000 + i}?w=300&h=300&fit=crop`,
    description: `Description for Product ${i + 4}`
  }))
);

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
    <div className="min-h-screen dark:bg-gray-950 bg-gray-100">
      {/* Header */}
      <header className="bg-white dark:bg-tertiary/80 dark:text-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to='/' className='flex items-center gap-1'>
                <img src={Logo} alt="Shophere Store" className="w-6 h-6" />
                <h1 className="text-2xl font-bold text-gray-900">Shophere</h1>
            </Link>
            <h1 className='uppercase text-gray-700 text-4xl text-bold font-serif'>Store</h1>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative  text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-full p-2 "
            >
              <ShoppingCart className="w-6 h-6 " />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
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
                          className="px-2 py-1 border rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 border rounded"
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

export default TopRated;