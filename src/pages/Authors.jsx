import React from 'react';
import './Authors.css';

// Sample authors data
const authors = [
  {
    id: 1,
    name: 'F. Scott Fitzgerald',
    bio: 'F. Scott Fitzgerald was an American novelist, best known for his novel The Great Gatsby.',
    booksLink: '/author/1',
  },
  {
    id: 2,
    name: 'George Orwell',
    bio: 'George Orwell was an English novelist, essayist, and critic, best known for his works 1984 and Animal Farm.',
    booksLink: '/author/2',
  },
  {
    id: 3,
    name: 'J.K. Rowling',
    bio: 'J.K. Rowling is a British author, best known for writing the Harry Potter series.',
    booksLink: '/author/3',
  },
  {
    id: 4,
    name: 'Harper Lee',
    bio: 'Harper Lee was an American novelist, best known for her novel To Kill a Mockingbird.',
    booksLink: '/author/4',
  },
];

const Authors = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-black-400 animate-bg-scroll">
    
        <div className="container mx-auto text-left">
  <h2 className="text-4xl font-bold mb-8 text-white font-serif relative">
    Featured Authors
  </h2>



        {/* Mobile & Laptop Grid for Authors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-6 md:px-8 lg:px-0 py-4">
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AuthorCard = ({ author }) => {
  return ( 
    <div className="relative bg-gradient-to-r from-white-400 to-black-500 hover:from-gray-500 hover:to-black-500 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-2xl duration-300 group">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-white">{author.name}</h3>
        <p className="text-white mt-2">{author.bio}</p>
      </div>
    </div>
  );
};

export default Authors;
