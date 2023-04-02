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
    <div className="bookDetails">
      <h2>Book Details</h2>
      <p>Book ID: {book.title}</p>
      {/* Render the details of the selected book based on the ID */}
    </div>
  );
}

export default BookDetails;
