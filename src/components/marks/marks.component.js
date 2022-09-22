import marksData from "../../assets/content/marksData"
import Mark from "../mark/mark.component"
import "./marks.styles.css"

const Marks = () => {

  if(!marksData){
    return null
  }

  return (
    <div className="marks-container">
      {
        marksData.map(mark => {
          return(
            <Mark mark={mark} /> 
          )
        })
      }
    </div>
  )
}
export default Marks