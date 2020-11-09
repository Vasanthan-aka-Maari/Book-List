import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

function BookDetails({ book }) {
  const { dispatch } = useContext(BookContext);
  return (
    <li>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
      <button
        className="remove-book"
        onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
      >
        Delete Book
      </button>
    </li>
  );
}

export default BookDetails;
