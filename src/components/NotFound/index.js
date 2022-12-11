import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="NotFound">
    <img
      src="https://res.cloudinary.com/dub9ymu0j/image/upload/v1670702789/Group_7484_yzrfuf.png"
      alt="not found"
    />
    <h1 className="NotFoundHeading">Page Not Found</h1>
    <p className="NotFoundText">
      we are sorry, the page you requested could not be found,Please go back to
      the homepage.
    </p>
    <Link to="/">
      <button type="button" className="NotFoundButton">
        Go Back to Home
      </button>
    </Link>
  </div>
)

export default NotFound
