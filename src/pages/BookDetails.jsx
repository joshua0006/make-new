import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchBookById } from "../services/api";

const BookDetails = () => {
  const { id } = useParams();
  const {
    data: book,
    isLoading,
    error,
  } = useQuery(["book", id], () => fetchBookById(id));

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return (
      <div className="text-center mt-8 text-red-600">
        Error: {error.message}
      </div>
    );
  if (!book) return <div className="text-center mt-8">Book not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col md:flex-row">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full md:w-1/3 h-auto object-cover rounded-lg"
          />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
            <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
            <p className="text-2xl text-blue-600 font-bold mb-4">
              ${book.price.toFixed(2)}
            </p>
            <p className="text-gray-700 mb-4">{book.description}</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
