import { useParams } from "react-router-dom"
import blogs from "../../assets/content/blogsData"
import "./blog-detail.styles.css"

const BlogDetail = ({blog}) => {
  const { id } = useParams()
  const blogData = blogs.find(n => n.id === Number(id))

  return (
    <div>
      <div className="blog-detail-container">
        <h2 className="blog-detail-title"><div class="vl"></div>{blogData.title}</h2>
        <hr />
        {
          blogData.content.map(blogPara => {
            return(
              <p className="blog-detail-content"><span className="blog-detail-content-first-letter">{blogPara.text[0]}</span>{blogPara.text.slice(1,-1)}</p>
            )            
          })
        }
        <p className="blog-detail-quote">{blogData.quote}</p>
      </div>
    </div>
  )
}

export default BlogDetail