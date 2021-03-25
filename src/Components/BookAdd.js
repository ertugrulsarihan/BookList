import React, { useContext, useState } from "react";
import { BookContext } from "../Context/BookContext";

const BookAdd = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setName] = useState("");
  const [author, setAuthor] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <div className="myform">
      <input
        onChange={changeName}
        type="text"
        name="bookname"
        value={title}
        placeholder="Bookname"
        required
      />
      <input
        onChange={changeAuthor}
        type="text"
        name="bookname"
        value={author}
        placeholder="Author"
        required
      />
      <button onClick={() => dispatch({type:'ADD_BOOK',book:{
        title,author
      }})}>Add Book</button>
    </div>
  );
};

export default BookAdd;
