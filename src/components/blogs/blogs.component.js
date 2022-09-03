import blogs from "../../assets/content/blogsData"
import Blog from "../blog/blog.component"
import "./blogs.styles.css"

const Blogs = () => {
  return (
    <div>
      <div className="blogs-container">
        <div className="container">
          {
            blogs.map(blog => {
              return (
                <Blog key={blog.id} blog={blog} /> 
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
export default Blogs