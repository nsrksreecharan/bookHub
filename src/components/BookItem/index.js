import {Link} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import './index.css'

const BookItem = props => {
  const {itemDetails} = props
  const {authorName, coverPic, id, rating, readStatus, title} = itemDetails
  return (
    <Link
      to={`/books/${id}`}
      style={{textDecoration: 'none', color: 'inherit'}}
    >
      <div type="none" className="BookItem">
        <div className="BookImageContainer">
          <img src={coverPic} alt={title} className="bookImage" />
        </div>
        <div className="BookDetailss">
          <h1 className="BookHeadingItem">{title}</h1>
          <p>{authorName}</p>
          <p>
            Avg Rating: <FaStar color="#FBBF24" /> {rating}
          </p>
          <p>
            Status:<span className="blue">{readStatus}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default BookItem
