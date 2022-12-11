import BookShelvesContext from '../../context/BookShelvesContext'
import './index.css'

const BookShelvesNavigator = () => (
  <BookShelvesContext.Consumer>
    {value => {
      const {activeNav, changeNavItem} = value
      return (
        <>
          <div className="NavigatorContainer">
            <h1 className="NavigatorHeading">Bookshelves</h1>
            <ul className="NavigatorItem">
              <li type="none">
                <button
                  className={`NavItem ${
                    activeNav === 'ALL' ? 'activeNav' : ''
                  }`}
                  type="button"
                  onClick={changeNavItem}
                  id="ALL"
                >
                  All
                </button>
              </li>
              <li type="none">
                <button
                  className={`NavItem ${
                    activeNav === 'READ' ? 'activeNav' : ''
                  }`}
                  type="button"
                  onClick={changeNavItem}
                  id="READ"
                >
                  Read
                </button>
              </li>
              <li type="none">
                <button
                  className={`NavItem ${
                    activeNav === 'CURRENTLY_READING' ? 'activeNav' : ''
                  }`}
                  type="button"
                  onClick={changeNavItem}
                  id="CURRENTLY_READING"
                >
                  Currently Reading
                </button>
              </li>
              <li type="none">
                <button
                  className={`NavItem ${
                    activeNav === 'WANT_TO_READ' ? 'activeNav' : ''
                  }`}
                  type="button"
                  onClick={changeNavItem}
                  id="WANT_TO_READ"
                >
                  Want to Read
                </button>
              </li>
            </ul>
          </div>
          <div className="NavigatorContainerMobile">
            <h1 className="NavigatorHeading">Bookshelves</h1>
            <div className="NavigatorItem">
              <button
                className={`NavItem ${activeNav === 'ALL' ? 'activeNav' : ''}`}
                type="button"
                onClick={changeNavItem}
                id="ALL"
              >
                All
              </button>

              <button
                className={`NavItem ${activeNav === 'READ' ? 'activeNav' : ''}`}
                type="button"
                onClick={changeNavItem}
                id="READ"
              >
                Read
              </button>

              <button
                className={`NavItem ${
                  activeNav === 'CURRENTLY_READING' ? 'activeNav' : ''
                }`}
                type="button"
                onClick={changeNavItem}
                id="CURRENTLY_READING"
              >
                Currently Reading
              </button>

              <button
                className={`NavItem ${
                  activeNav === 'WANT_TO_READ' ? 'activeNav' : ''
                }`}
                type="button"
                onClick={changeNavItem}
                id="WANT_TO_READ"
              >
                Want to Read
              </button>
            </div>
          </div>
        </>
      )
    }}
  </BookShelvesContext.Consumer>
)

export default BookShelvesNavigator
