import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { Product } from '../data/products'
import { useCart } from '../context/CartContext'

interface ProductCardProps {
  product: Product
}

const fallbackImage = 'https://via.placeholder.com/300x200?text=Product+Image'

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = fallbackImage;
        }}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
        <p className="text-indigo-600 font-bold mb-4">${product.price.toFixed(2)}</p>
        <div className="flex justify-between items-center">
          <Link to={`/product/${product.id}`} className="text-indigo-600 hover:text-indigo-800 transition-colors">
            View Details
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="btn btn-primary flex items-center"
          >
            <ShoppingCart size={18} className="mr-2" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard