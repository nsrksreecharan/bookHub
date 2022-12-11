import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TopRatedItem from '../TopRatedItem'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

class Home extends Component {
  state = {topRatedList: [], success: true, isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const topRatedBooksApiUrl = 'https://apis.ccbp.in/book-hub/top-rated-books'
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(topRatedBooksApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const modifiedData = data.books.map(i => ({
        authorName: i.author_name,
        coverPic: i.cover_pic,
        id: i.id,
        title: i.title,
      }))
      this.setState({
        isLoading: false,
        success: true,
        topRatedList: modifiedData,
      })
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
    const {topRatedList} = this.state
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
    }
    const settingsMobile = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    }
    return (
      <>
        <div className="HomeRoute">
          <h1 className="headingHome">Find Your Next Favorite Books?</h1>
          <p className="descriptionHome">
            You are in the right place.Tell us what titles or genres you have
            enjoyed in the past, and we will give you surprisingly insightful
            recommendations.
          </p>
          <div className="sliderContainerHome">
            <div className="headerContainerSliderHome">
              <h1 className="topRatedHeading">Top Rated Books</h1>

              <Link to="/shelf" style={{textDecoration: 'none'}}>
                <button type="button" className="FindBooksButton">
                  Find Books
                </button>
              </Link>
            </div>
            <ul className="Slider">
              <Slider {...settings} className="sliderHome">
                {topRatedList.map(i => (
                  <TopRatedItem key={i.id} itemDetails={i} />
                ))}
              </Slider>
            </ul>
            <ul className="SliderMobile">
              <Slider {...settingsMobile} className="sliderHomeMobile">
                {topRatedList.map(i => (
                  <TopRatedItem key={i.id} itemDetails={i} />
                ))}
              </Slider>
            </ul>
          </div>
        </div>
      </>
    )
  }

  renderHome = () => {
    const {success} = this.state
    return success ? this.renderSuccessView() : this.renderFailureView()
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        <Header />
        {isLoading ? this.renderLoader() : this.renderHome()}
        <Footer />
      </>
    )
  }
}

export default Home
