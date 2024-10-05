import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'

const ProductList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = products
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'price') return a.price - b.price
      return 0
    })

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Products</h2>
      <div className="mb-6 flex flex-wrap justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="input flex-grow md:flex-grow-0 md:w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex gap-4">
          <select
            className="input"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
          <select
            className="input"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList