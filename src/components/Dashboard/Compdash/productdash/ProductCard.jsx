import React from 'react';
import { Edit, Trash2, Star } from 'lucide-react';

export function ProductCard({ name, price, image, category, stock, rating }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
            <Edit className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
            <Trash2 className="w-4 h-4 text-red-500" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
          <span className="text-lg font-bold text-blue-600">${price.toFixed(2)}</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
            {category}
          </span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className={`text-sm ${stock > 10 ? 'text-green-600' : 'text-red-600'}`}>
            {stock} in stock
          </span>
        </div>
      </div>
    </div>
  );
}
