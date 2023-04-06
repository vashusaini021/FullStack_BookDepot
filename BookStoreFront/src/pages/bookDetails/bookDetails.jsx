import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function BookDetails() {
        const { id } = useParams();

    const [book, setBook] = useState({});
      useEffect(() => {
        fetch(`http://localhost:3000/books/`+id)
            .then(response => response.json() )
            .then(data => {
              console.log(data)
              setBook(data)
            })
            .catch(error => console.log(error));
    }, []);
    
  return (
    <div className="product">
    <img src={book.thumbnailUrl} alt={book.title} />
    <div className="description">
      <p> <b>{book.title}</b> </p>
      <p> ${book.price}</p>
    </div>
    </div>
  );
}

export default BookDetails;
