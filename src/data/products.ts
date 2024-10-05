export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  { id: 1, name: 'Smartphone', price: 599.99, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'A high-end smartphone with advanced features.', category: 'Electronics' },
  { id: 2, name: 'Laptop', price: 999.99, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Powerful laptop for work and entertainment.', category: 'Electronics' },
  { id: 3, name: 'Headphones', price: 149.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'High-quality headphones with noise cancellation.', category: 'Electronics' },
  { id: 4, name: 'Smartwatch', price: 249.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Feature-packed smartwatch for fitness and notifications.', category: 'Electronics' },
  { id: 5, name: 'Camera', price: 699.99, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Professional-grade camera for stunning photos and videos.', category: 'Electronics' },
  { id: 6, name: 'Gaming Console', price: 399.99, image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Next-gen gaming console for immersive gameplay.', category: 'Electronics' },
  { id: 7, name: 'Running Shoes', price: 89.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Comfortable running shoes for all types of terrain.', category: 'Sports' },
  { id: 8, name: 'Yoga Mat', price: 29.99, image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'High-quality yoga mat for comfortable practice.', category: 'Sports' },
  { id: 9, name: 'Dumbbells Set', price: 79.99, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Adjustable dumbbells set for home workouts.', category: 'Sports' },
  { id: 10, name: 'T-shirt', price: 19.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Comfortable cotton t-shirt for everyday wear.', category: 'Clothing' },
  { id: 11, name: 'Jeans', price: 49.99, image: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Classic denim jeans for a timeless look.', category: 'Clothing' },
  { id: 12, name: 'Sunglasses', price: 79.99, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Stylish sunglasses with UV protection.', category: 'Accessories' },
]

export const categories = Array.from(new Set(products.map(product => product.category)))