import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './DisplayLibrary.css';

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
  
  console.log('data:', data);
  
  return(
    
    <div className="library-container">
      <h1>Ma bibliothèque</h1>
      <div className="books-list-container">
        {data.map(item => (
        <div key={item.idbooks} className="book-container">
          <img src={item.image} alt={item.title} />
          <div className="book-info-container">
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
          </div>
        </div>
      )
      )}
      </div>
    </div>
  );
}

export default DisplayLibrary;