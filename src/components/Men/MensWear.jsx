import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import { useState } from 'react';
import Transition from '../../Transiton';


const products = [
  {
    id: 1,
    name: "Classic Fit Suit",
    price: '600k',
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
    category: "Suits"
  },
  {
    id: 2,
    name: "Premium Cotton Shirt",
    price: '40k',
    image: "https://i.pinimg.com/736x/ce/62/25/ce6225aac125047600cb44464712a354.jpg",
    category: "Shirts"
  },
  {
    id: 3,
    name: "Slim Fit Chinos",
    price: '14k',
    image: "https://i.pinimg.com/736x/7b/68/17/7b6817f3816f6901d1d268246a191cdc.jpg",
    category: "Pants"
  },
  {
    id: 4,
    name: "Leather Oxford Shoes",
    price: '50k',
    image: "https://i.pinimg.com/736x/60/80/bd/6080bdd15b4e7327deb6360819aca5ac.jpg",
    category: "Shoes"
  },
  {
    id: 5,
    name: "Wool Overcoat",
    price: '299k',
    image: "https://i.pinimg.com/736x/c5/0a/e8/c50ae8856ec4ac69afb6c614d960b80d.jpg",
    category: "Outerwear"
  },
  {
    id: 6,
    name: "Cashmere Sweater",
    price: '300k',
    image: "https://i.pinimg.com/736x/93/61/4b/93614b9b6c5a53d9bbd1a83ced80b423.jpg",
    category: "Knitwear"
  },
  {
    id: 7,
    name: "Pinstripe Business Suit",
    price: '400k',
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&w=800",
    category: "Suits"
  },
  {
    id: 8,
    name: "Linen Summer Shirt",
    price: '7k',
    image: "https://images.unsplash.com/photo-1604695573706-53170668f6a6?auto=format&fit=crop&q=80&w=800",
    category: "Shirts"
  },
  {
    id: 9,
    name: "Leather Dress Belt",
    price: '5k',
    image: "https://i.pinimg.com/736x/8b/54/8b/8b548b53f351b07b792b4d68970adff7.jpg",
    category: "Accessories"
  },
  {
    id: 10,
    name: "Silk Tie Collection",
    price: '2k',
    image: "https://i.pinimg.com/736x/ce/de/8f/cede8f8ea94453e54e26f54b0793d178.jpg",
    category: "Accessories"
  },
  {
    id: 11,
    name: "Merino Wool Blazer",
    price: '350k',
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&q=80&w=800",
    category: "Suits"
  },
  {
    id: 12,
    name: "Leather Messenger Bag",
    price: '20k',
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
    category: "Accessories"
  },
  {
    id: 13,
    name: "Premium Denim Jeans",
    price: '25k',
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=800",
    category: "Pants"
  },
  {
    id: 14,
    name: "Suede Chelsea Boots",
    price: '350k',
    image: "https://i.pinimg.com/736x/fe/f7/83/fef783a25c8674140d2ef81e39a25869.jpg",
    category: "Shoes"
  },
  {
    id: 15,
    name: "Quilted Winter Jacket",
    price: '250k',
    image: "https://images.unsplash.com/photo-1557418669-db3f781a58c0?auto=format&fit=crop&q=80&w=800",
    category: "Outerwear"
  },
  {
    id: 16,
    name: "Patterned Dress Socks",
    price: '1500',
    image: "https://i.pinimg.com/736x/f8/5b/ad/f85badf6f7aaa213d90f1a189e604107.jpg",
    category: "Accessories"
  },
  {
    id: 17,
    name: "Leather Dress Watch",
    price: '299k',
    image: "https://i.pinimg.com/736x/07/5f/2b/075f2b4959143da576b8003851995e28.jpg",
    category: "Accessories"
  },
  {
    id: 18,
    name: "Formal Dress Pants",
    price: '30k',
    image: "https://i.pinimg.com/736x/f3/fa/d2/f3fad26ecc6479e27eaeb90b019b779e.jpg",
    category: "Pants"
  },
  {
    id: 19,
    name: "Cotton Polo Shirt",
    price: '15k',
    image: "https://i.pinimg.com/736x/08/82/bd/0882bd9945fb08229b89b5b97fd0cbd9.jpg",
    category: "Shirts"
  },
  {
    id: 20,
    name: "Leather Wallet",
    price: '10k',
    image: "https://i.pinimg.com/736x/4e/50/55/4e5055eee448bc6cc54386368c8dc1f0.jpg",
    category: "Accessories"
  },
  {
    id: 21,
    name: "Wool Dress Coat",
    price: '399k',
    image: "https://i.pinimg.com/736x/df/19/3c/df193c656d4fa36db76868b919e35d08.jpg",
    category: "Outerwear"
  },
  {
    id: 22,
    name: "Business Briefcase",
    price: '199k',
    image: "https://i.pinimg.com/736x/7d/cd/b4/7dcdb4f6b3a9c0b6ee388a5a7b29cc1b.jpg",
    category: "Accessories"
  },
  {
    id: 23,
    name: "Silk Pocket Square",
    price: '5k',
    image: "https://i.pinimg.com/736x/e3/55/b5/e355b5530231f3fdc378296a523c14b2.jpg",
    category: "Accessories"
  },
  {
    id: 24,
    name: "Leather Dress Gloves",
    price: '50k',
    image: "https://i.pinimg.com/736x/8d/55/13/8d551312afda0fcfe6f8efa3abbd9ff4.jpg",
    category: "Accessories"
  },
  {
    id: 25,
    name: "Tuxedo Set",
    price: '81,859',
    image: "https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&q=80&w=800",
    category: "Suits"
  },
  {
    id: 26,
    name: "Designer Sunglasses",
    price: '30k',
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
    category: "Accessories"
  },
  {
    id: 27,
    name: "Luxury Diamond Watch",
    price: '1.5B',
    image: "https://i.pinimg.com/736x/b7/45/0e/b7450eb625466593bab4985b5e53b97d.jpg",
    category: "Accessories"
  },
  {
    id: 28,
    name: "Baggy Cargo Pants",
    price: '40k',
    image: "https://i.pinimg.com/736x/79/e8/81/79e8818f9e53c9f04f0def1d0a6cdfd1.jpg",
    category: "Pants"
  },
  {
    id: 29,
    name: "Sleek Nike Airforce",
    price: '150k',
    image: "https://i.pinimg.com/736x/97/15/1e/97151e213fe4d7707280c11f2743827e.jpg",
    category: "Shoes"
  },
  {
    id: 30,
    name: "Ice Necklace",
    price: '1B',
    image: "https://i.pinimg.com/736x/4e/89/bb/4e89bb1bffb83b256cb86ef4a99424ec.jpg",
    category: "Accessories"
  },
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
      <div className='flex items-center gap-1 relative bottom-5 right-1'>
            <img src={Logo} className='w-9 h-8' alt="" />
            <Link to='/home' className="text-3xl font-bold text-black dark:text-white ">Shophere</Link>
        </div>
      <div className="flex justify-center items-center mb-8">
        <h1>Mens Wear</h1>
       <div className='absolute right-14'>
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

export default Transition (MensWear) ;