import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsFillStarFill} from 'react-icons/bs'
import Footer from '../Footer'
import Header from '../Header'
import './index.css'

class BookDetails extends Component {
  state = {data: {}, success: true, isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const token = Cookies.get('jwt_token')
    const DetailsApiUrl = `https://apis.ccbp.in/book-hub/books/${id}`
    const options = {
      methods: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(DetailsApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const modifiedData = {
        aboutAuthor: data.book_details.about_author,
        aboutBook: data.book_details.about_book,
        authorName: data.book_details.author_name,
        coverPic: data.book_details.cover_pic,
        id: data.book_details.id,
        rating: data.book_details.rating,
        readStatus: data.book_details.read_status,
        title: data.book_details.title,
      }
      this.setState({data: modifiedData, isLoading: false, success: true})
    } else {
      this.setState({isLoading: false, success: false})
    }
  }

  renderFailureView = () => (
    <div className="FailureContainer">
      <img
        src="https://res.cloudinary.com/dub9ymu0j/image/upload/v1670692230/Group_7522_hxe6g6.png"
        alt="failure view"
        className="FailureImage"
      />
      <p className="FailureText">Something went wrong. Please try again</p>
      <button type="button" onClick={this.getData} className="NotFoundButton">
        Try Again
      </button>
    </div>
  )

  renderLoader = () => (
    <div className="Loader" testid="loader">
      <Loader type="TailSpin" color="#0284C7" />
    </div>
  )

  renderSuccessView = () => {
    const {data} = this.state
    const {
      rating,
      coverPic,
      authorName,
      title,
      readStatus,
      id,
      aboutAuthor,
      aboutBook,
    } = data
    return (
      <div className="BookDetails">
        <div className="DetailsBox">
          <div className="BookItemDetails">
            <div className="BookImageContainer">
              <img src={coverPic} alt={title} className="bookImageDetail" />
            </div>
            <div className="BookDetailsDetail">
              <h1 className="BookHeadingItemDetail">{title}</h1>
              <p className="p">{authorName}</p>
              <p className="p">
                Avg Rating: <BsFillStarFill color="#FBBF24" /> {rating}
              </p>
              <p className="p">
                Status:<span className="blue">{readStatus}</span>
              </p>
            </div>
          </div>
          <hr />
          <div className="authorContainer">
            <h1 className="authorHeading">About Author</h1>
            <p className="authorDescription">{aboutAuthor}</p>
          </div>
          <div className="authorContainer">
            <h1 className="authorHeading">About Book</h1>
            <p className="authorDescription">{aboutBook}</p>
          </div>
        </div>
      </div>
    )
  }

  renderBookDetails = () => {
    const {success} = this.state
    return success ? this.renderSuccessView() : this.renderFailureView()
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        <Header />
        {isLoading ? this.renderLoader() : this.renderBookDetails()}
        <Footer />
      </>
    )
  }
}

export default BookDetails
