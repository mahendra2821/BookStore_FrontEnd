import React from "react";
import { Link } from "react-router-dom";
import './Feture.css'

const books = [
  {
    id: 1,
    title: "Book Title 1",
    imageUrl: "https://img.freepik.com/premium-photo/hindu-religion-holy-scriptures-like-ramayana-mahabharata-geeta-books-with-aum-symbol_466689-47252.jpg?w=900",
    viewAllLink: "/books", // Link to view all books
  },
  {
    id: 2,
    title: "Book Title 2",
    imageUrl: "https://nageenprakashan.in/cdn/shop/files/UPB099_Front.jpg?v=1718109070&width=533",
    viewAllLink: "/books", // Link to view all books
  },
  {
    id: 3,
    title: "Book Title 3",
    imageUrl: "https://m.economictimes.com/thumb/msid-102177218,width-640,height-480,resizemode-7/you-can-by-george-matthew-adams.jpg",
    viewAllLink: "/books", // Link to view all books
  },
  {
    id: 4,
    title: "Book Title 4",
    imageUrl: "https://thumbs.dreamstime.com/b/app-development-book-title-spine-d-business-concept-78781998.jpg",
    viewAllLink: "/books", // Link to view all books
  },
  {
    id: 5,
    title: "Book Title 1",
    imageUrl: "https://m.media-amazon.com/images/I/81R3vbq+u-L._AC_UF1000,1000_QL80_.jpg",
    viewAllLink: "/books", // Link to view all books
  },
  {
    id: 6,
    title: "Book Title 2",
    imageUrl: "https://target.scene7.com/is/image/Target/GUEST_88eecb15-c309-4029-a302-1b816cc14620",
    viewAllLink: "/books", // Link to view all books
  },
  {
    id: 7,
    title: "Book Title 3",
    imageUrl: "https://nageenprakashan.in/cdn/shop/files/9th-science-color.jpg?v=1718109056",
    viewAllLink: "/books", // Link to view all books
  },
  {
    id: 8,
    title: "Book Title 4",
    imageUrl : "https://giri.in/cdn/shop/products/91001903_Samkshepa_Ramayanam_01_1200x1200.jpg?v=1704894174",
    viewAllLink: "/books", // Link to view all books
  },
  // Add more books if needed...
];

const FetureBooks = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-black animate-bg-scroll">
      <div className="container mx-auto">
        {/* Scrollable Row on Mobile */}
        <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 px-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:space-x-0 md:gap-8">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BookCard = ({ book }) => {
  return (
    <div className="min-w-[75%] sm:min-w-[45%] md:min-w-0 relative bg-white rounded-lg shadow-lg overflow-hidden border-2 border-dotted border-gray-500 hover:border-black transform transition-transform hover:-translate-y-2 hover:scale-105 duration-500 snap-start">
      {/* Image */}
      <div className="relative group">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="w-full h-64 object-cover transform transition-transform group-hover:rotate-12 group-hover:scale-110 duration-500"
        />
        {/* View All Button */}
        <Link
          to={book.viewAllLink}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-800 hover:text-gray-300 duration-300 transition-all"
        >
          View All ➡️
        </Link>
      </div>
    </div>
  );
};

export default FetureBooks;
