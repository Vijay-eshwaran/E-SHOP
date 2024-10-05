import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { Trash2, ShoppingBag } from 'lucide-react'

const Cart: React.FC = () => {
  const { cart, removeFromCart, getTotalPrice } = useCart()

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Your cart is empty</h2>
        <Link to="/products" className="text-indigo-600 hover:text-indigo-800 transition-colors">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <p className="text-xl font-bold text-gray-800">Total: ${getTotalPrice().toFixed(2)}</p>
        <Link
          to="/payment"
          className="btn btn-primary"
        >
          Proceed to Payment
        </Link>
      </div>
    </div>
  )
}

export default Cart