import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return(
    <div className="home-container">
      <h1>My fav library</h1>
      <Link to="/library">
        <button>Ma bibliothèque</button>
      </Link>
    </div>
  )
}

export default Home;