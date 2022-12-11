import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {GrSearch} from 'react-icons/gr'
import BookItem from '../BookItem'
import BookShelvesNavigator from '../BookShelvesNavigator'
import './index.css'

class BookShelvesAll extends Component {
  state = {searchText: '', dataList: [], success: false, isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {searchText} = this.state
    const token = Cookies.get('jwt_token')
    const BooksApiUrl = `https://apis.ccbp.in/book-hub/books?shelf=CURRENTLY_READING&search=${searchText}`
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(BooksApiUrl, option)
    const data = await response.json()
    if (response.ok === true) {
      const modifiedData = data.books.map(i => ({
        authorName: i.author_name,
        coverPic: i.cover_pic,
        id: i.id,
        rating: i.rating,
        readStatus: i.read_status,
        title: i.title,
      }))
      this.setState({dataList: modifiedData, success: true, isLoading: false})
    }
  }

  onSearch = event => {
    this.setState({searchText: event.target.value})
  }

  searchResult = () => {
    this.setState(this.getData)
  }

  renderLoading = () => (
    <div className="ShelvesLoading">
      <Loader type="TailSpin" color="#0284C7" />
    </div>
  )

  renderNoBooks = () => {
    const {searchText} = this.state
    return (
      <div className="NoBooksContainer">
        <img
          src="https://res.cloudinary.com/dub9ymu0j/image/upload/v1670693482/Asset_1_1_d43olf.png"
          alt="No Videos"
          className=""
        />
        <p>Your search for {searchText} did not find any matches.</p>
      </div>
    )
  }

  renderBooks = () => {
    const {dataList} = this.state
    return (
      <div className="itemsContainerBookShelves">
        {dataList.map(i => (
          <BookItem key={i.id} itemDetails={i} />
        ))}
      </div>
    )
  }

  renderSuccessView = () => {
    const {dataList} = this.state
    console.log(dataList)
    return dataList.length ? this.renderBooks() : this.renderNoBooks()
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

  renderBookShelve = () => {
    const {success} = this.state
    return success ? this.renderSuccessView() : this.renderFailureView()
  }

  render() {
    const {searchText, isLoading} = this.state
    return (
      <div className="BookShelvesRoute">
        <div className="searchBoxContainerMobile">
          <input
            type="search"
            className="searchBox"
            placeholder="Search"
            value={searchText}
            onChange={this.onSearch}
          />
          <button
            testid="searchButton"
            type="button"
            className="SearchButton"
            onClick={this.searchResult}
          >
            <GrSearch />
          </button>
        </div>

        <BookShelvesNavigator />
        <div className="BookShelves">
          <div className="BookShelvesHeadingContainer">
            <p className="BookShelvesHeading">Currently Reading Books</p>
            <div className="searchBoxContainer">
              <input
                type="search"
                className="searchBox"
                placeholder="Search"
                value={searchText}
                onChange={this.onSearch}
              />
              <button
                type="button"
                onClick={this.searchResult}
                className="SearchButton"
              >
                <GrSearch />
              </button>
            </div>
          </div>
          {isLoading ? this.renderLoading() : this.renderBookShelve()}
        </div>
      </div>
    )
  }
}

export default BookShelvesAll
