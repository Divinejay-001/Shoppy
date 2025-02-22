import React, { useState, useEffect } from 'react';
import { Heart, Filter, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { FaArrowUp } from "react-icons/fa";
import Transiton from '../../Transiton';


function WomensPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Summer Floral Dress",
      price: 89.99,
      category: "dresses",
      image:'https://i.pinimg.com/736x/57/4a/33/574a336fa6c490227aa5d31d1b42d1dc.jpg'
    },
    {
      id: 2,
      name: "Classic Denim Jacket",
      price: 129.99,
      category: "outerwear",
      image:'https://i.pinimg.com/736x/ad/8e/05/ad8e054bf8eba1052f01f94a6fc62f21.jpg'

    },
    {
      id: 3,
      name: "High-Waist Jeans",
      price: 79.99,
      category: "pants",
      image:'https://i.pinimg.com/736x/0b/1e/d4/0b1ed49e23f5210c04fdd4a63f2fcfa0.jpg'
    },
    {
      id: 4,
      name: "Silk Blouse",
      price: 69.99,
      category: "tops",
      image:'https://i.pinimg.com/736x/3a/65/f9/3a65f990d5e8b6068c619225a6e67a96.jpg'
    },
    {
      id: 5,
      name: "Pleated Midi Skirt",
      price: 59.99,
      category: "skirts",
      image:'https://i.pinimg.com/736x/85/4d/f1/854df198790c8a3b1483fbfefd9afd37.jpg'
    },
    {
      id: 6,
      name: "Knit Sweater",
      price: 89.99,
      category: "tops",
      image:'https://i.pinimg.com/736x/a5/e0/b3/a5e0b34879a01c564a97857ae1656236.jpg'
    },
    {
      id: 7,
      name: "Linen Wrap Dress",
      price: 99.99,
      category: "dresses",
      image:'https://i.pinimg.com/736x/60/50/2c/60502c428dce118c355b8ca69d968d60.jpg'
    },
    {
      id: 8,
      name: "Oversized Blazer",
      price: 149.99,
      category: "outerwear",
      image:'https://i.pinimg.com/736x/81/2d/74/812d74279d7a00d391fac1fad6af24c4.jpg'
    },
    {
      id: 9,
      name: "Luxury Earrings",
      price: 69.99,
      category: "jewelry",
      image:'https://i.pinimg.com/736x/0f/46/2a/0f462a91697c561d26a2bd847e9e33a0.jpg'
    },
    {
      id: 10,
      name: "Cotton Tank Top",
      price: 29.99,
      category: "tops",
      image:'https://i.pinimg.com/736x/fe/c6/b3/fec6b3427ff8d3cc19970fbaa20d785d.jpg'
    },
    {
      id: 11,
      name: "Denim Mini Skirt",
      price: 49.99,
      category: "skirts",
      image:'https://i.pinimg.com/736x/c1/0a/78/c10a78037442b3315af3b765442c517c.jpg'
    },
    {
      id: 12,
      name: "Cashmere Cardigan",
      price: 199.99,
      category: "tops",
      image:'https://i.pinimg.com/736x/0b/d7/16/0bd7165bd4fae5ab3acc18c0df1e043d.jpg'
    },
    {
      id: 13,
      name: "Satin Maxi Dress",
      price: 119.99,
      category: "dresses",
      image:'https://i.pinimg.com/736x/76/83/74/768374a658df8f56c7ec2703c479eb85.jpg'
    },
    {
      id: 14,
      name: "Faux Fur Coat",
      price: 179.99,
      category: "outerwear",
      image:'https://i.pinimg.com/736x/0a/7e/b1/0a7eb199523e62c68117ea3f222a58d4.jpg'
    },
    {
      id: 15,
      name: "Cargo Pants",
      price: 89.99,
      category: "pants",
      image: 'https://i.pinimg.com/736x/3d/2f/49/3d2f49ed055cad3ad4a23d27113c362f.jpg'
    },
    {
      id: 16,
      name: "Chiffon Blouse",
      price: 54.99,
      category: "tops",
      image: 'https://i.pinimg.com/736x/4a/c8/f9/4ac8f971f82b2a56baf3a3bc962f8e26.jpg'
    },
    {
      id: 17,
      name: "Bracelet",
      price: 79.99,
      category: "jewelry",
      image: 'https://i.pinimg.com/736x/99/42/56/9942560f1f14a03938987ab0b8093296.jpg'
    },
    {
      id: 18,
      name: "Nike Shoe",
      price: 99.99,
      category: "shoe",
      image: 'https://i.pinimg.com/736x/69/a5/6a/69a56a4dff630e54458ceb4bbf852432.jpg'
    },
    {
      id: 19,
      name: "Heel Shoe",
      price: 89.99,
      category: "shoe",
      image: 'https://i.pinimg.com/736x/4c/6c/3c/4c6c3cc1308a461e17ae0c09cd8bcde8.jpg'
    },
    {
      id: 20,
      name: "Trench Coat",
      price: 159.99,
      category: "outerwear",
      image: 'https://i.pinimg.com/736x/f6/d5/5f/f6d55fd12c6bfb1556a9354f63f7737c.jpg'
    },
    {
      id: 21,
      name: "Slim Fit Jeans",
      price: 79.99,
      category: "pants",
        image: 'https://i.pinimg.com/736x/35/55/fb/3555fbb6ddccfd294c4c6e2fd5e7ae5b.jpg'
    },
    {
      id: 22,
      name: "Luxury NeckLace",
      price: 69.99,
      category: "Jewelry",
      image: 'https://i.pinimg.com/736x/ab/70/47/ab70479cb6a28ef27dbed8155e1e169a.jpg'
    },
    {
      id: 23,
      name: "Denim Pencil Skirt",
      price: 64.99,
      category: "skirts",
      image: 'https://i.pinimg.com/736x/57/15/9e/57159e293077d88b35f4bd2267b9eb84.jpg'
    },
    {
      id: 24,
      name: "Birkin Bag",
      price: 89.99,
      category: "bags",
        image: 'https://i.pinimg.com/736x/ec/4e/72/ec4e722c04b904fa8ecff6c884c68448.jpg'
    },
    {
      id: 25,
      name: "Off-Shoulder Dress",
      price: 99.99,
      category: "dresses",
      image: 'https://i.pinimg.com/736x/eb/fd/9b/ebfd9ba981ef2b3f13a89a1093cb548b.jpg' 
    },
    {
      id: 26,
      name: "Puffer Jacket",
      price: 189.99,
      category: "outerwear",
      image: 'https://i.pinimg.com/736x/19/56/ba/1956bab12508bfe4285f34c29422b286.jpg'
    },
    {
      id: 27,
      name: "Catier Wrist watch",
      price: 89.99,
      category: "jewelry",
      image: 'https://i.pinimg.com/736x/e3/34/7a/e3347a8eea96d676586ed0d32a52069d.jpg'
    },
    {
      id: 28,
      name: "Embroidered Tunic",
      price: 74.99,
      category: "tops",
      image: 'https://i.pinimg.com/736x/3b/46/5d/3b465d7e76f9973b4ff4a928b7f0d079.jpg'
    },
    {
      id: 29,
      name: "Tulle Skirt",
      price: 79.99,
      category: "skirts",
      image: 'https://i.pinimg.com/736x/59/5f/26/595f268bc0bb3b2b4915d8b4bd433b4c.jpg'
    },
    {
      id: 30,
      name: "Bracelet",
      price: 119.99,
      category: "tops",
        image: 'https://i.pinimg.com/736x/66/34/a8/6634a8fb5717186b9ae6e877e1af5557.jpg'
    },
    {
      id: 31,
      name: "Bodycon Midi Dress",
      price: 89.99,
      category: "dresses",
        image: 'https://i.pinimg.com/736x/f9/b4/5c/f9b45c0b6613acbe083fd6ec0dec5970.jpg'
    },
    {
      id: 32,
      name: "Baggy Jeans",
      price: 199.99,
      category: "pants",    
      image: 'https://i.pinimg.com/736x/83/fb/d1/83fbd16abeb35de7a677b5a04f474ca4.jpg'
    },
    {
      id: 33,
      name: "Dress Jeans",
      price: 74.99,
      category: "outwear",
      image: 'https://i.pinimg.com/736x/94/8d/d7/948dd79dc66eed052abaa3afc80c26aa.jpg'
    },
    {
      id: 34,
      name: "Lace Crop Top",
      price: 39.99,
      category: "tops",
      image: 'https://i.pinimg.com/736x/f5/da/43/f5da4321f0f167c40093a561440dd151.jpg'
    },
    {
      id: 35,
      name: "Fringe Mini Skirt",
      price: 69.99,
      category: "skirts",
      image: 'https://i.pinimg.com/736x/73/98/85/739885e424921ac05226e3c48bf6899f.jpg'
    },
    {
      id: 36,
      name: "Pijamas",
      price: 99.99,
      category: "tops",
      image: 'https://i.pinimg.com/736x/d7/c0/33/d7c033b8bd12425ac3598d40fbc59c03.jpg'
    },
    {
      id: 37,
      name: "Strapless Cocktail Dress",
      price: 129.99,
      category: "dresses",
        image: 'https://i.pinimg.com/736x/60/35/9a/60359ad87739ca40002e33ba7a6604d4.jpg'
    },
    {
      id: 38,
      name: "Double-Breasted Coat",
      price: 159.99,
      category: "outerwear",
        image: 'https://i.pinimg.com/736x/10/86/f0/1086f0dec932cd3715a21e3fff6411c9.jpg'
    },
    {
      id: 39,
      name: "Best Hoop Earrings",
      price: 79.99,
      category: "jewelry",
      image: 'https://i.pinimg.com/736x/fb/ee/bc/fbeebce78da2fe5c95e413e83d262fb0.jpg'
    },
    {
      id: 40,
      name: "Diamond Necklace",
      price: 99.99,
      category: "jewelry",
      image: 'https://i.pinimg.com/736x/5e/78/a8/5e78a890603bd0b20cdea84093558dba.jpg'
    },
    {
      id: 41,
      name: "Luxury Earrings",
      price: 229.99,
      category: "jewelry",
      image: 'https://i.pinimg.com/736x/0f/46/2a/0f462a91697c561d26a2bd847e9e33a0.jpg'
    },
    {
      id: 42,
      name: "Shoes",
      price: 84.99,
      category: "Shoes",
      image: 'https://i.pinimg.com/736x/4e/a6/6e/4ea66e52239d6bc956b0e08ec2655ad5.jpg'
    },
    {
      id: 43,
      name: "Adidas Shoe",
      price: 59.99,
      category: "tops",
      image: 'https://i.pinimg.com/736x/19/b5/1e/19b51e12537d2cd05afdf2c43504ef84.jpg'
    },
    {
      id: 44,
      name: "Shoes",
      price: 69.99,
      category: "skirts",
        image: 'https://i.pinimg.com/736x/b3/bf/8f/b3bf8f385cce059443f06587ff05cb29.jpg'
    },
    {
      id: 45,
      name: "Pink Nike Shoe",
      price: 49.99,
      category: "tops",
        image: 'https://i.pinimg.com/736x/0f/31/97/0f3197dcadd9dcdeed6cb2d76da862e8.jpg'
    },
    {
      id: 46,
      name: "Diamond Bracelet",
      price: 89.99,
      category: "dresses",
        image: 'https://i.pinimg.com/736x/33/99/43/33994341d91a52683acbab0adfc01e01.jpg'
    },
    {
      id: 47,
      name: "Oversized Hoodie",
      price: 69.99,
      category: "outerwear",
      image: 'https://i.pinimg.com/736x/46/1d/99/461d99726be1c006385d29d6ddd3ab91.jpg'
    },
    {
      id: 48,
      name: "Fitted Blazer",
      price: 139.99,
      category: "outerwear",
      image: 'https://i.pinimg.com/736x/ed/c2/8f/edc28f9e123caa4ddfda619169c85837.jpg'
    },
    {
      id: 49,
      name: "Sweater Dress",
      price: 99.99,
      category: "dresses",
      image: 'https://i.pinimg.com/736x/49/45/23/494523a881d72d41ea10e5bcb5ad35b7.jpg'
    },
    {
      id: 50,
      name: "Pleated Palazzo Pants",
      price: 89.99,
      category: "pants",
      image: 'https://i.pinimg.com/736x/75/6f/f1/756ff13cc3a4a1ffa1442a3129bab67e.jpg'
    }
  ];
  

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  return (
    <div>
      {/* Category Header */}
      <div className="relative h-screen/2 bg-white dark:bg-gray-950">
      <div className='absolute top-6 left-3 sm:left-8 z-10 '>
        <Link to='/home' className='font-bold cursor-pointer text-white text-3xl flex gap-2 items-center'>
                 <img src={Logo} alt="" className='w-10
                 ' />
                <span className='hidden sm:block'>Shophere</span>
             </Link>
          {/* <a href="/" className='font-bold text-white text-3xl flex gap-2 items-center'>
            <User className="w-8 h-8" />
            Shophere
          </a> */}
        </div>
  {/* Video Background */}
  <video 
    autoPlay 
    muted 
    loop 
    playsInline 
    className="absolut inset-0 w-full  h-[350px] object-cover lg:object-left lg:h-[400px]   "
    src="https://v1.pinimg.com/videos/mc/expMp4/54/76/c5/5476c541ed20bb80d3e2f293f79bbde6_t1.mp4">
  </video>

  {/* Overlay for better text visibility */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Text Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
    <h1 className="text-4xl font-bold">Women's Collection</h1>
    <p className="mt-2 text-lg">Discover our latest styles for every occasion</p>
  </div>
</div>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Filters */}
        <div className="flex items-center justify-between mb-0">
          <div className="flex items-center space-x-4">
           
          </div>
          
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-4 aspect-h-5 bg-gray-100 shadow-xl rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover object-center group-hover:opacity-75 transition"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-300">{product.name}</h3>
                <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-300">${product.price}</p>
              </div>
              <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <button
      className={`fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp size={20} />
    </button>
      </div>
    </div>
  );
}

export default Transiton(WomensPage);