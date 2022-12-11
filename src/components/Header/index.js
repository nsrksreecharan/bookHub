import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {BiMenu} from 'react-icons/bi'

import BookShelvesContext from '../../context/BookShelvesContext'
import './index.css'

class Header extends Component {
  state = {visible: false}

  changeVisible = () => {
    this.setState(i => ({
      visible: !i.visible,
    }))
  }

  render() {
    const LogoutUser = () => {
      const {history} = this.props
      Cookies.remove('jwt_token')
      history.replace('/')
    }

    return (
      <BookShelvesContext.Consumer>
        {value => {
          const {active, changeActive} = value
          const {visible} = this.state

          return (
            <>
              <div className="Header">
                <div className="LogoContainerHeader">
                  <Link to="/">
                    <img
                      src="https://res.cloudinary.com/dub9ymu0j/image/upload/v1670662961/Group_7731bookHubLogo_uliueq.jpg"
                      alt="website Logo"
                    />
                  </Link>
                </div>
                <div className="linksContainerHeader">
                  <li type="none">
                    <Link
                      to="/"
                      style={{textDecoration: 'none', color: 'inherit'}}
                      className={`link ${
                        active === 'Home' ? 'activeLinkHeader' : ''
                      }`}
                      id="Home"
                      type="none"
                      onClick={changeActive}
                    >
                      Home
                    </Link>
                  </li>
                  <li type="none">
                    <Link
                      to="/shelf"
                      style={{textDecoration: 'none', color: 'inherit'}}
                      className={`link ${
                        active === 'Shelves' ? 'activeLinkHeader' : ''
                      }`}
                      id="Shelves"
                      type="none"
                      onClick={changeActive}
                    >
                      Bookshelves
                    </Link>
                  </li>

                  <li className="link" type="none">
                    <button
                      type="button"
                      onClick={LogoutUser}
                      className="LogoutButton"
                    >
                      Logout
                    </button>
                  </li>
                </div>
              </div>

              <div className="HeaderMobile">
                <div className="LogoContainerHeader">
                  <Link to="/">
                    <img
                      src="https://res.cloudinary.com/dub9ymu0j/image/upload/v1670662961/Group_7731bookHubLogo_uliueq.jpg"
                      alt="website Logo"
                      className="websiteLogoNav"
                    />
                  </Link>
                </div>
                <button
                  type="button"
                  className="MenuButton"
                  onClick={this.changeVisible}
                >
                  <BiMenu className="MenuLogo" />
                </button>
              </div>
              <div
                className={`linksContainerHeaderMobile ${
                  visible ? 'visible' : ''
                }`}
              >
                <li type="none" className="Li">
                  <Link
                    to="/"
                    style={{textDecoration: 'none', color: 'inherit'}}
                    className={`link ${
                      active === 'Home' ? 'activeLinkHeader' : ''
                    }`}
                    id="Home"
                    type="none"
                    onClick={changeActive}
                  >
                    Home
                  </Link>
                </li>
                <li type="none" className="Li">
                  <Link
                    to="/shelf"
                    style={{textDecoration: 'none', color: 'inherit'}}
                    className={`link ${
                      active === 'Shelves' ? 'activeLinkHeader' : ''
                    }`}
                    id="Shelves"
                    type="none"
                    onClick={changeActive}
                  >
                    Bookshelves
                  </Link>
                </li>

                <li className="Li" type="none">
                  <button
                    type="button"
                    onClick={LogoutUser}
                    className="LogoutButton"
                  >
                    Logout
                  </button>
                </li>
              </div>
            </>
          )
        }}
      </BookShelvesContext.Consumer>
    )
  }
}

export default withRouter(Header)
