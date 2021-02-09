import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './DisplayLibrary.css';
import BookComponent from './BookComponent';

const DisplayLibrary = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:5000/api/books',
      );
      setData(result.data);
    };
    fetchData();
  }, []);
    
  return(
    
    <div className="library-container">
      <h1>Ma bibliothèque</h1>
      <div className="books-list-container">
        {data.map(item => (
        <BookComponent
          key={item.idbooks}
          title={item.title} 
          image={item.image} 
          author={item.author}
          summary={item.summary}
        />
      ))}
      </div>
    </div>
  );
}

export default DisplayLibrary;