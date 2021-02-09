const BookComponent = ({image, title, author, summary}) => {
  return(
    <div className="book-container">
      <img src={image} alt={title} />
      <div className="book-info-container">
        <h2>{title}</h2>
        <h3>{author}</h3>
        <p>{summary}</p>
      </div>
    </div>
  )
}

export default BookComponent;