import React from 'react'

const BookCard = ({ book }) => {
  return (
    <div>
        <img src={book.cover_i} alt={book.title} />
        <h3>{book.title}</h3>
        <p>{book.author_name}</p>
    </div>
  )
}

export default BookCard