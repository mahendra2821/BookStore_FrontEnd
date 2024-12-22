import React from 'react';
import { Link } from 'react-router-dom';
import './PopularBooks.css';

// Sample popular books data
const popularBooks = [
  {
    id: 1,
    title: 'The Great Gatsby',
    description: 'A classic novel by F. Scott Fitzgerald.',
    imageUrl: 'https://image.shutterstock.com/image-photo/book-cover-great-gatsby-260nw-1234567890.jpg',
    viewLink: '/book/1',
  },
  {
    id: 2,
    title: '1984',
    description: 'A dystopian novel by George Orwell.',
    imageUrl: 'https://image.shutterstock.com/image-photo/book-cover-1984-260nw-1234567890.jpg',
    viewLink: '/book/2',
  },
  {
    id: 1,
    title: 'The Great Gatsby',
    description: 'A classic novel by F. Scott Fitzgerald.',
    imageUrl: 'https://image.shutterstock.com/image-photo/book-cover-great-gatsby-260nw-1234567890.jpg',
    viewLink: '/book/1',
  },
  {
    id: 2,
    title: '1984',
    description: 'A dystopian novel by George Orwell.',
    imageUrl: 'https://image.shutterstock.com/image-photo/book-cover-1984-260nw-1234567890.jpg',
    viewLink: '/book/2',
  },
 
  // Add more books as needed...
];

const PopularBooks = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-black-200 animate-bg-scroll">
      <div className="container mx-auto text-left"> {/* Align headline to the left */}
        <h2 className="text-3xl font-bold mb-8 text-white-900 font-serif">Popular Books</h2> {/* Custom color and font family */}
        
        {/* Mobile Scrollable Grid for Horizontal Scroll */}
        <div className="flex overflow-x-auto space-x-3 px-4 sm:px-6 md:px-8 lg:px-0 py-4 ml-6">
          {popularBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BookCard = ({ book }) => {
  return (
    <Link to={book.viewLink} className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl duration-300 group min-w-[200px]">
      <div className="relative">
        {/* Book Image */}
        <img
          src={book.imageUrl}
          alt={book.title}
          className="w-full h-64 object-cover group-hover:rotate-6 group-hover:scale-110 transform transition-all duration-500"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
          <p className="text-gray-600 mt-2">{book.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PopularBooks;
