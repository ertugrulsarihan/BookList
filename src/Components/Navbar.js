import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";

export default function Navbar() {
  const {books} = useContext(BookContext);
  console.log(books);
  return (
    <>
      <div className="navbar">
        <h1>Book List</h1>
        <p>You have {books.length} books</p>
      </div>
    </>
  );
}
