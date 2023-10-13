import bcrypt from 'bcryptjs'
import { User } from './models/userMordel'
import { Product } from './models/productModel'

export const sampleProducts: Product[] = [
  {
    name: 'Nike Slim Shirt',
    slug: 'nike-slim-shirt',
    category: 'Shirts',
    image: '../images/p1.jpg',
    price: 120,
    countInStock: 10,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 10,
    description: 'high quality shirt',
  },
  {
    name: 'Adidas Fit Shirt',
    slug: 'adidas-fit-shirt',
    category: 'Shirts',
    image: '../images/p2.jpg',
    price: 100,
    countInStock: 20,
    brand: 'Adidas',
    rating: 4.2,
    numReviews: 10,
    description: 'high quality product',
  },
  {
    name: 'Lacoste Free Shirt',
    slug: 'lacoste-free-shirt',
    category: 'Pants',
    image: '../images/p3.jpg',
    price: 220,
    countInStock: 0,
    brand: 'Lacoste',
    rating: 4.8,
    numReviews: 17,
    description: 'high quality product',
  },
  {
    name: 'Nike Slim Short',
    slug: 'nike-slim-short',
    category: 'Pants',
    image: '../images/p4.jpg',
    price: 78,
    countInStock: 15,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 14,
    description: 'high quality product',
  },
]

export const sampleUsers: User[] = [
  {
    name: 'John Smith',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'User Joe',
    email: 'user1@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
  {
    name: 'User Jane',
    email: 'user2@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
]
