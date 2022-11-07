import './App.css';
import {useState} from 'react';

const App = ({bookData}) => {
  return (
    <div className="app-container">
      {bookData.map((book) => (
        <div className="book-card">
          <div>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <div className="short-description">{book.shortDescription}</div>
            <Description
            url={book.url}
            publisher={book.publisher}
            date={book.publicationDate}
            details={book.detailedDescription}/>
            <img className="cover" src={book.coverImageUrl}/>
          </div>
        </div>
      ))}
    </div>
  )}

const Description = 
export default App;

