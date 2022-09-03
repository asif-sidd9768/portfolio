import './main-content.styles.css'
import portfolio_image from '../../assets/images/portfolio-image.png'
import { Link } from 'react-router-dom';

const MainContent = () => {
  return (
    <div className="main-content-container">
      <div className="main-content-holder">
        <div>
          <img src={portfolio_image} alt="portfolio img"/>
        </div>
        <div className="main-content-text">
          <p className="name-text">Asif Siddique</p>
          <p className="programmer-text">
            <div class="codinfox-sidebar-description sidebar-personal-info-section">
              A
              <div class="codinfox-changing-keywords" id="change">
                <strong>
                  <b class="hidden changing-text">Tech enthusiast</b><br/>
                  <b class="hidden changing-text" >Software engineer</b><br/>
                  <b class="hidden changing-text">Lifelong learner</b><br/>
                  <b class="hidden changing-text">Wanderer</b>
                </strong>
              </div>
            </div>
          </p>
          <Link to="/marks">
            <div className="explore-button">
              <button class="glow-on-hover" type="button">CLICK TO EXPLORE!</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainContent;