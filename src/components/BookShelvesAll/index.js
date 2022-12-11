import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import BookItem from '../BookItem'
import BookShelvesNavigator from '../BookShelvesNavigator'
import './index.css'

class BookShelvesAll extends Component {
  state = {searchValue: '', dataList: [], success: false, isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {searchValue} = this.state
    const token = Cookies.get('jwt_token')
    const BooksApiUrl = `https://apis.ccbp.in/book-hub/books?shelf=ALL&search=${searchValue}`
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
    this.setState({searchValue: event.target.value})
  }

  searchResult = () => {
    this.setState(this.getData)
  }

  renderLoading = () => (
    <div className="Loader" testid="loader">
      <Loader type="TailSpin" color="#0284C7" />
    </div>
  )

  renderNoBooks = () => {
    const {searchValue} = this.state
    return (
      <div className="NoBooksContainer">
        <img
          src="https://res.cloudinary.com/dub9ymu0j/image/upload/v1670693482/Asset_1_1_d43olf.png"
          alt="no books"
        />
        <p>Your search for {searchValue} did not find any matches.</p>
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
    const {searchValue, isLoading} = this.state
    return (
      <div className="BookShelvesRoute">
        <div className="searchBoxContainerMobile">
          <input
            type="search"
            className="searchBox"
            placeholder="Search"
            value={searchValue}
            onChange={this.onSearch}
          />
          <button
            testid="searchButton"
            type="button"
            className="SearchButton"
            onClick={this.searchResult}
          >
            <BsSearch />
          </button>
        </div>
        <BookShelvesNavigator />
        <div className="BookShelves">
          <div className="BookShelvesHeadingContainer">
            <p className="BookShelvesHeading">All Books</p>
            <div className="searchBoxContainer">
              <input
                type="search"
                className="searchBox"
                placeholder="Search"
                value={searchValue}
                onChange={this.onSearch}
              />
              <button
                testid="searchButton"
                type="button"
                className="SearchButton"
                onClick={this.searchResult}
              >
                <BsSearch />
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
