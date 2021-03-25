import React, { useContext } from "react";

import { BookContext } from "../Context/BookContext";

const BookDetail = ({ book }) => {
  const {dispatch} = useContext(BookContext);
  console.log(book.id);
  return (
    <li onClick={()=>dispatch({type:'REMOVE_BOOK',id:book.id})}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetail;
