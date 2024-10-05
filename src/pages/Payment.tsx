import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { CreditCard, Calendar, Lock } from 'lucide-react'

const Payment: React.FC = () => {
  const { getTotalPrice, clearCart } = useCart()
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual payment processing logic
    alert('Payment processed successfully!')
    clearCart()
    // Redirect to a thank you page or order confirmation
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Payment</h2>
      <p className="mb-6 text-lg font-semibold text-indigo-600">Total Amount: ${getTotalPrice().toFixed(2)}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="cardNumber" className="block mb-1 text-gray-700">Card Number</label>
          <div className="relative">
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="input pl-10"
              required
            />
            <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="expiryDate" className="block mb-1 text-gray-700">Expiry Date</label>
            <div className="relative">
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                className="input pl-10"
                required
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          <div className="flex-1">
            <label htmlFor="cvv" className="block mb-1 text-gray-700">CVV</label>
            <div className="relative">
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="input pl-10"
                required
              />
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Pay Now
        </button>
      </form>
    </div>
  )
}

export default Payment