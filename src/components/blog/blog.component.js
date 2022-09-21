import { Link } from "react-router-dom"
import "./blog.styles.css"

const Blog = ({blog}) => {
  return (
    <div class="card">
      <div class="card__header">
        <img src="https://i.ibb.co/DK3vT0w/mark-Fifteen.jpg" alt="card__image" class="card__image" width="600"/>
      </div>
      <div class="card__body">
        <span class="tag tag-blue">{blog.tag}</span>
        <Link to={`/blogs/${blog.id}`} className="blog-card-title">
          <h4>{blog.title}</h4>
        </Link>
        <p className="blog-description">{blog.content[0].text}</p>
      </div>
      <div class="card__footer">
        <div class="user">
          <img src="https://i.ibb.co/DK3vT0w/mark-Fifteen.jpg" alt="user__image" class="user__image"/>
          <div class="user__info">
            <p style={{ margin: 0 }}>{blog.author}</p>
            <small>{blog.time}</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog