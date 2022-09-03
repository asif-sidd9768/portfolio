import './navigation.styles.css'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="navigation-container">
        <div className="header-logo">
          <Link to="/" className="level-zero-text-style">
            <p className="level-zero-text">LevelZero<span className="level-zero-subscript"><sub>By Asif Siddique</sub></span></p>
          </Link>
        </div>
        <div>
          <div className="nav-button-container">
            <Link className="nav-button" to="/marks">Marks</Link>
            <Link className="nav-button" to="/blogs">Blogs</Link>
            {/* <p className="nav-button">Marks</p>
            <p className="nav-button">Blogs</p>
            <p className="nav-button">Extras</p> */}
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Navigation;