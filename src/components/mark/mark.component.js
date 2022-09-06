import { CCard, CCardBody, CCardTitle, CButton, CCardImage } from "@coreui/react"
import { Link } from "react-router-dom"
import "./mark.styles.css"

const Mark = ({mark}) => {
  const {id, title, image} = mark
  console.log(image)

  return (
    <div className="mark-container">
      <CCard style={{ width: '18rem' }} key={id}>
        <CCardImage className="mark-detail-card-image" orientation="top" src={image} />
        <CCardBody>
          <CCardTitle>{title}</CCardTitle>
          {
            mark.url
              ? 
                <div className="detail-buttons-container">
                  <Link to={{
                    pathname: `/marks/${mark.id}`,
                    state: { markInfo: mark}}}>
                    <CButton color="dark" size="sm">{mark.buttonText}</CButton>
                  </Link>
                  <a href={`${mark.source}`} target="_blank" rel="noopener noreferrer" style={{marginLeft: '10px'}}>
                    <CButton color="dark" size="sm">View Source</CButton>
                  </a>
                </div>
              : 
                <div className="detail-buttons-container">
                  <Link to={`${mark.link}`}>
                    <CButton color="dark" size="sm">{mark.buttonText}</CButton>
                  </Link>
                  <a href={`${mark.source}`} target="_blank" rel="noopener noreferrer" style={{marginLeft: '10px'}}>
                    <CButton color="dark" size="sm">View Source</CButton>
                  </a>
                </div>
          }
        </CCardBody>
      </CCard>
    </div>
  )
}

export default Mark