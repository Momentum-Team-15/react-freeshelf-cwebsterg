import './App.css';
import {useState} from 'react';

const App = ({bookData}) => {
  return (
    <div className="app-container">
      <header>
        <h1>Freeshelf - Come and Get It!</h1>
      </header>
      {bookData.map((book) => (
        <div className="book-card">
          <div>
            <h2><a href={book.url}>{book.title}</a></h2>
            <h3>{book.author}</h3>
            <div className="short-description">{book.shortDescription}</div>
            <Description
            publisher={book.publisher}
            date={book.publicationDate}
            details={book.detailedDescription}/>
          </div>
            <img className="cover" src={book.coverImageUrl} alt="book cover"/>
        </div>
      ))}
    </div>
  )}

const Description = ({url, publisher, date, details}) => {
  const [display, setDisplay] = useState(false)
  const handleClick = (event) => {setDisplay(!display)}
  return (
    <>
    <button onClick={handleClick} type="button">
      {display ? "Hide" : "Show"} Details</button>
    {display &&
    <div className="details">
      <div className="full-description">{details}</div>
      <div className="publisher">Publisher: {publisher ? <>{publisher}</> : "Not Available"}</div>
      <div className="date">Publication Date: {date ? <>{date}</> : "Not Available"}</div>
    </div>}
    </>
  )};

export default App;

