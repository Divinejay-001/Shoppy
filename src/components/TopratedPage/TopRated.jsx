import React, { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
// Curated list of real Unsplash product images
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
  {
    id: 4,
    name: "Professional DSLR Camera",
    price: 899.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop",
    description: "High-end digital camera for professional photography"
  },
  {
    id: 5,
    name: "Minimalist Desk Lamp",
    price: 79.99,
    category: "Home & Garden",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop",
    description: "Modern LED desk lamp with adjustable brightness"
  },
  {
    id: 6,
    name: "Leather Messenger Bag",
    price: 149.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    description: "Handcrafted leather bag for professionals"
  },
  {
    id: 7,
    name: "Wireless Gaming Mouse",
    price: 89.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
    description: "High-precision gaming mouse with RGB lighting"
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    price: 129.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=300&h=300&fit=crop",
    description: "RGB mechanical keyboard with Cherry MX switches"
  },
  {
    id: 9,
    name: "Smart Home Speaker",
    price: 179.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=300&h=300&fit=crop",
    description: "Voice-controlled smart speaker with premium sound"
  },
  {
    id: 10,
    name: "Fitness Tracker",
    price: 79.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=300&h=300&fit=crop",
    description: "Advanced fitness tracking with heart rate monitoring"
  },
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
  [
    // Electronics
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b", // Gaming Console
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07", // Laptop
    "https://images.unsplash.com/photo-1585298723682-7115561c51b7", // Tablet
    "https://images.unsplash.com/photo-1512054502232-10a0a035d672", // Camera Lens
    "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb", // Smartwatch
    
    // Home & Garden
    "https://images.unsplash.com/photo-1540932239986-30128078f3c5", // Living Room
    "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb", // Kitchen Appliance
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92", // Garden Tools
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36", // Furniture
    "https://images.unsplash.com/photo-1513694203232-719a280e022f", // Home Decor
    
    // Fashion
    "https://images.unsplash.com/photo-1560343090-f0409e92791a", // Watch
    "https://images.unsplash.com/photo-1591561954557-26941169b49e", // Shoes
    "https://images.unsplash.com/photo-1556306535-0f09a537f0a3", // Handbag
    "https://images.unsplash.com/photo-1582142306909-195724d33ffc", // Jewelry
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27", // Sunglasses
    
    // Sports & Outdoors
    "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2", // Fitness Equipment
    "https://images.unsplash.com/photo-1530549387789-4c1017266635", // Camping Gear
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438", // Bicycle
    "https://images.unsplash.com/photo-1540539234-c14a20fb7c7b", // Running Shoes
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b", // Yoga Mat
    
    // Beauty & Personal Care
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b", // Skincare
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348", // Makeup
    "https://images.unsplash.com/photo-1585232004423-244e0e6904e3", // Hair Care
    "https://images.unsplash.com/photo-1556228578-0d85b1a4d571", // Perfume
    "https://images.unsplash.com/photo-1556228720-195a672e8a03", // Beauty Tools
  ].map((imageUrl, index) => ({
    id: index + 11,
    name: `Product ${index + 11}`,
    price: Math.round(Math.random() * 200 + 9.99),
    category: ['Electronics', 'Home & Garden', 'Fashion', 'Sports & Outdoors', 'Beauty & Personal Care'][Math.floor(Math.random() * 5)],
    image: `${imageUrl}?w=300&h=300&fit=crop`,
    description: `High-quality product with premium features`
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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
           
            <Link to="/" className="text-2xl flex justify-center items-center gap-1 font-bold text-gray-900 text-center">
             <img src={logo} className='w-6 h-6'/>
              Shophere
            </Link>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-gray-600 hover:text-gray-900"
            >
              <ShoppingCart className="w-6 h-6" />
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