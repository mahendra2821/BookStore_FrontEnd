import React from 'react';
import './PopularBooks.css';

// Sample popular books data
const popularBooks = [
  {
    id: 1,
    title: 'The Great Gatsby',
    description: 'A classic novel by F. Scott Fitzgerald.',
    imageUrl: 'https://www.usatoday.com/gcdn/media/USATODAY/USATODAY/2013/05/07/gatsby-mti-jacket-1_1.jpg',
  },
  {
    id: 2,
    title: '1984',
    description: 'A dystopian novel by George Orwell.',
    imageUrl: 'https://cdn.kobo.com/book-images/457e80e8-8568-48a0-93cd-8a9b7f16c3be/353/569/90/False/1984-illustrated.jpg',
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
    description: 'A novel by Harper Lee about racial injustice.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZTlkYWU4MGEtZmQyYi00OWEzLTgzY2EtYzVjOTEzYzAyNTk1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 4,
    title: 'Moby Dick',
    description: 'A novel by Herman Melville about a giant white whale.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZWUyOTgyMzktMjhmNi00NThkLTkxMGEtMGU0ZDEzZWQxNjNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 5,
    title: 'Another',
    description: 'In Another Life" by C.C. Hunter explores the tumultuous life of Chloe Holden',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654184305i/7372466.jpg',
  },
  {
    id: 6,
    title: 'The Girl In The Book',
    description: 'The Girl in the Book is a 2015 American drama film..',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7f/The_Girl_in_the_Book_poster.png',
  },
];

const PopularBooks = () => {
  return (
    <section className="py-16 bg-gradient-to-br bg-black">
      <div className="container mx-auto text-left px-4">
        <h2 className="text-3xl font-bold mb-8 text-white font-serif">Popular Books</h2>

        {/* Scrollable Grid for Mobile View */}
        <div className="flex overflow-x-auto space-x-6 px-2 sm:px-4 scrollbar-hide">
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
    <div className="flex-none w-56 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        src={book.imageUrl}
        alt={book.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
        <p className="text-gray-600 mt-2">{book.description}</p>
      </div>
    </div>
  );
};

export default PopularBooks;
