import { useParams } from "react-router-dom"
import marksData from "../../assets/content/marksData"
import "./mark-detail.styles.css"

const MarkDetail = (props) => {
  const { id } = useParams()
  const markData = marksData.find(n => n.id === Number(id))

  return (
    <div className="mark-detail-container">
      <iframe frameborder="0" width="100%" height="600px" src={markData.url}></iframe>
    </div>
  )
}

export default MarkDetail