import {Link} from 'react-router-dom'
import './index.css'

const TopRatedItem = props => {
  const {itemDetails} = props
  const {authorName, coverPic, id, title} = itemDetails
  return (
    <Link
      to={`/books/${id}`}
      style={{textDecoration: 'none', color: 'inherit'}}
    >
      <li type="none" className="topRatedItem">
        <img src={coverPic} alt={title} className="bookTopRated" />
        <h1 className="sliderItemHeading">{title}</h1>
        <p className="sliderItemTitle">{authorName}</p>
      </li>
    </Link>
  )
}

export default TopRatedItem
