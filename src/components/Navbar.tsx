import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, User, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cart } = useCart()

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-indigo-600">E-Shop</Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/products" className="text-gray-600 hover:text-indigo-600 transition-colors">Products</Link>
            <Link to="/login" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <User size={20} />
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-indigo-600 transition-colors relative">
              <ShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4">
          <Link to="/products" className="block py-2 text-gray-600 hover:text-indigo-600">Products</Link>
          <Link to="/login" className="block py-2 text-gray-600 hover:text-indigo-600">Login</Link>
          <Link to="/cart" className="block py-2 text-gray-600 hover:text-indigo-600">Cart ({cartItemsCount})</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar