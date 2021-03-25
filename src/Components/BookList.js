import React,{useContext} from 'react';
import BookDetails from'./BookDetails';
import {BookContext} from '../Context/BookContext'

const BookList =()=>{
    const {books}=useContext(BookContext);
    console.log(books);
    return books.length ?
    (
<div className='book-list'>
<ul>
    {
        books.map((book)=>(
              <BookDetails book={{title:book.title,author:book.author,id:book.id}} key={book.id}/>
        ))
    }
</ul>
</div>
    ):(
        <div className='empty'>You dont have book.</div>
    )
}

export default BookList;