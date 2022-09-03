import { CCard, CCardBody, CCardText, CCardTitle, CButton, CCardImage } from "@coreui/react"
import { Link } from "react-router-dom"
import "./mark.styles.css"

const Mark = ({mark}) => {
  const {id, title, description, buttonText, image} = mark
  console.log(image)

  return (
    <div className="mark-container">
      <CCard style={{ width: '18rem' }} key={id}>
        <CCardImage className="mark-detail-card-image" orientation="top" src={image} />
        <CCardBody>
          <CCardTitle>{title}</CCardTitle>
          {
            mark.url
              ? <Link to={{
                  pathname: `/marks/${mark.id}`,
                  state: { markInfo: mark}}}>
                  <CButton color="dark" size="sm">{mark.buttonText}</CButton>
                </Link>
              : <Link to={`${mark.link}`}>
                  <CButton color="dark" size="sm">{mark.buttonText}</CButton>
                </Link>
          }
        </CCardBody>
      </CCard>
    </div>
  )
}

export default Mark