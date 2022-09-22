import { Link } from "react-router-dom"
import "./mark.styles.css"

const Mark = ({mark}) => {
  const {id, title, image} = mark

  return (
    <div className="mark-container">
      <div className="mark-detail-card" style={{ width: '18rem', backgroundColor: '#ECE9E6' }} key={id}>
        <img className="mark-detail-card-image" orientation="top" src={image} alt="mark detail"/>
        <div className="mark-detail-body">
          <p className="mark-title">{title}</p>
          {
            mark.url
              ? 
                <div style={{marginBottom: 10}}>
                  <div className="detail-buttons-container">
                  <Link to={{
                    pathname: `/marks/${mark.id}`,
                    state: { markInfo: mark}}}>
                    <button className="mark-view-btn">{mark.buttonText}</button>
                  </Link>
                  <a href={`${mark.source}`} target="_blank" rel="noopener noreferrer" style={{marginLeft: '10px'}}>
                    <button className="view-source-btn" >View Source</button>
                  </a>
                  </div>
                  <a href={mark.url} target="_blank" rel="noreferrer">
                    <button className="netlify-btn">
                      {mark.newTabBtnTxt} <img alt="new tab icon" class="new-tab-btn-icon" src="https://i.ibb.co/2crkPHp/resize-1.png" />
                    </button>
                  </a>
                </div>
              : 
                <div style={{ paddingBottom: 10 }}>
                  <div className="detail-buttons-container">
                    <Link to={`${mark.link}`}>
                      <button className="mark-view-btn">{mark.buttonText}</button>
                    </Link>
                    <a href={`${mark.source}`} target="_blank" rel="noopener noreferrer" style={{marginLeft: '10px'}}>
                      <button className="view-source-btn">View Source</button>
                    </a>
                  </div>
                  {/* <a href={mark.url} target="_blank" rel="noreferrer">
                    <button className="netlify-btn">
                      Visit Netlify hosted
                    </button>
                  </a> */}
                </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Mark