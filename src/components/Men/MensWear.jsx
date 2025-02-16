import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import { useState } from 'react';


const products = [
  {
    id: 1,
    name: "Classic Fit Suit",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
    category: "Suits"
  },
  {
    id: 2,
    name: "Premium Cotton Shirt",
    price: 79.99,
    image: "https://i.pinimg.com/736x/ce/62/25/ce6225aac125047600cb44464712a354.jpg",
    category: "Shirts"
  },
  {
    id: 3,
    name: "Slim Fit Chinos",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=800",
    category: "Pants"
  },
  {
    id: 4,
    name: "Leather Oxford Shoes",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&q=80&w=800",
    category: "Shoes"
  },
  {
    id: 5,
    name: "Wool Overcoat",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1544923408-75c5cef46f14?auto=format&fit=crop&q=80&w=800",
    category: "Outerwear"
  },
  {
    id: 6,
    name: "Cashmere Sweater",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1614251055880-ee96e4803393?auto=format&fit=crop&q=80&w=800",
    category: "Knitwear"
  },
  {
    id: 7,
    name: "Pinstripe Business Suit",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&w=800",
    category: "Suits"
  },
  {
    id: 8,
    name: "Linen Summer Shirt",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1604695573706-53170668f6a6?auto=format&fit=crop&q=80&w=800",
    category: "Shirts"
  },
  {
    id: 9,
    name: "Leather Dress Belt",
    price: 59.99,
    image: "https://i.pinimg.com/736x/8b/54/8b/8b548b53f351b07b792b4d68970adff7.jpg",
    category: "Accessories"
  },
  {
    id: 10,
    name: "Silk Tie Collection",
    price: 45.99,
    image: "https://i.pinimg.com/736x/ce/de/8f/cede8f8ea94453e54e26f54b0793d178.jpg",
    category: "Accessories"
  },
  {
    id: 11,
    name: "Merino Wool Blazer",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&q=80&w=800",
    category: "Suits"
  },
  {
    id: 12,
    name: "Leather Messenger Bag",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
    category: "Accessories"
  },
  {
    id: 13,
    name: "Premium Denim Jeans",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=800",
    category: "Pants"
  },
  {
    id: 14,
    name: "Suede Chelsea Boots",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&q=80&w=800",
    category: "Shoes"
  },
  {
    id: 15,
    name: "Quilted Winter Jacket",
    price: 279.99,
    image: "https://images.unsplash.com/photo-1557418669-db3f781a58c0?auto=format&fit=crop&q=80&w=800",
    category: "Outerwear"
  },
  {
    id: 16,
    name: "Patterned Dress Socks",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&q=80&w=800",
    category: "Accessories"
  },
  {
    id: 17,
    name: "Leather Dress Watch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800",
    category: "Accessories"
  },
  {
    id: 18,
    name: "Formal Dress Pants",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?auto=format&fit=crop&q=80&w=800",
    category: "Pants"
  },
  {
    id: 19,
    name: "Cotton Polo Shirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=800",
    category: "Shirts"
  },
  {
    id: 20,
    name: "Leather Wallet",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800",
    category: "Accessories"
  },
  {
    id: 21,
    name: "Wool Dress Coat",
    price: 399.99,
    image: "https://i.pinimg.com/736x/df/19/3c/df193c656d4fa36db76868b919e35d08.jpg",
    category: "Outerwear"
  },
  {
    id: 22,
    name: "Business Briefcase",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800",
    category: "Accessories"
  },
  {
    id: 23,
    name: "Silk Pocket Square",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800",
    category: "Accessories"
  },
  {
    id: 24,
    name: "Leather Dress Gloves",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&q=80&w=800",
    category: "Accessories"
  },
  {
    id: 25,
    name: "Tuxedo Set",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&q=80&w=800",
    category: "Suits"
  },
  {
    id: 26,
    name: "Designer Sunglasses",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
    category: "Accessories"
  }
];


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
function MensWear({ setCartCount }) {
    const [cart, setCart] = useState([]);
      const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className="max-w-7xl  text-black  mx-auto px-4 sm:px-6 lg:px-8 py-12 dark:text-white">
      <div className="flex justify-between items-center mb-8">
        <div className='flex items-center gap-1'>
            <img src={Logo} className='w-9 h-8' alt="" />
            <Link to='/home' className="text-3xl font-bold text-black dark:text-white ">Shophere</Link>
        </div>
        <div className="md:flex flex-col sm:flex-row hidden gap-4">
          <select className="px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200">
            <option value="">All Categories</option>
            <option value="suits">Suits</option>
            <option value="shirts">Shirts</option>
            <option value="pants">Pants</option>
            <option value="shoes">Shoes</option>
            <option value="outerwear">Outerwear</option>
            <option value="knitwear">Knitwear</option>
            <option value="accessories">Accessories</option>
          </select>
          <select className="px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200">
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
         <button
                      onClick={() => setIsCartOpen(true)}
                      className="relative text-gray-600 hover:text-gray-900"
                    >
                      <ShoppingCart className="w-6 h-6 dark:text-white" />
                      {cart.length > 0 && (
                        <span className="absolute -top-1 -right-2 bg-blue-600 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                          {cart.reduce((sum, item) => sum + item.quantity, 0)}
                        </span>
                      )}
                    </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button 
                    onClick={() => addToCart(product)}
                    className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
              >
                <ShoppingCart size={20} className="text-gray-700" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{product.category}</p>
              <p className="text-xl font-bold text-gray-900">₦{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default MensWear;