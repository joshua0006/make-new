import React, { useState } from "react";
import { useQuery } from "react-query";
import BookCard from "../components/BookCard";
import { fetchBooks } from "../services/api";

const BookList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: books, isLoading, error } = useQuery("books", fetchBooks);

  const filteredBooks = books?.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return (
      <div className="text-center mt-8 text-red-600">
        Error: {error.message}
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Book Collection</h1>
      <input
        type="text"
        placeholder="Search books..."
        className="w-full px-4 py-2 rounded-md border border-gray-300 mb-8"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredBooks?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
