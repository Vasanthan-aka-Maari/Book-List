import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

function BookList() {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books &&
          books.map((book) => <BookDetails book={book} key={book.id} />)}
      </ul>
    </div>
  ) : (
    <div className="empty">Add some books to read.</div>
  );
}

export default BookList;
