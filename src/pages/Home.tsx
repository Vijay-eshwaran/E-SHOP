import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { products } from '../data/products'

const fallbackImage = 'https://via.placeholder.com/300x200?text=Product+Image'

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Welcome to E-Shop</h1>
        <p className="text-xl mb-8 text-gray-600">Discover amazing products at unbeatable prices!</p>
        <div className="flex justify-center space-x-4">
          <Link to="/products" className="btn btn-primary flex items-center">
            Shop Now <ArrowRight className="ml-2" size={18} />
          </Link>
          <Link to="/products" className="btn btn-secondary">
            Browse Categories
          </Link>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
                <p className="text-indigo-600 font-bold mb-2">${product.price.toFixed(2)}</p>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={16} className="text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600">(50 reviews)</span>
                </div>
                <Link to={`/product/${product.id}`} className="btn btn-primary w-full text-center">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home