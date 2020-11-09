import React, { useContext, useState, useRef } from "react";
import { BookContext } from "../contexts/BookContext";

function BookForm() {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const inputRef = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (title !== "" && author !== "") {
          dispatch({ type: "ADD_BOOK", book: { title, author } });
          setTitle("");
          setAuthor("");
          inputRef.current.focus();
        } else {
          alert("Please add Title and Author");
        }
      }}
    >
      <h2 className="heading">Add a Book</h2>
      <label htmlFor="title">Title</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Book Title"
        ref={inputRef}
      />
      <br />
      <label htmlFor="author">Author</label>
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        type="text"
        placeholder="Book Author"
      />
      <br />
      <input type="submit" value="Add Book" />
    </form>
  );
}

export default BookForm;
