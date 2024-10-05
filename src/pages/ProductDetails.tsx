import React from 'react'
import { useParams } from 'react-router-dom'
import { ShoppingCart, Heart } from 'lucide-react'

const products = [
  { id: 1, name: 'Smartphone', price: 599.99, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'A high-end smartphone with advanced features.' },
  { id: 2, name: 'Laptop', price: 999.99, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Powerful laptop for work and entertainment.' },
  { id: 3, name: 'Headphones', price: 149.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'High-quality headphones with noise cancellation.' },
]

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <ShoppingCart className="mr-2" /> Add to Cart
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors flex items-center">
              <Heart className="mr-2" /> Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails