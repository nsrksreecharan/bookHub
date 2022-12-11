import Header from '../Header'
import Footer from '../Footer'
import BookShelvesContext from '../../context/BookShelvesContext'
import BookShelvesAll from '../BookShelvesAll'
import BookShelvesRead from '../BookShelvesRead'
import BookShelvesCurrentlyReading from '../BookShelvesCurrentlyReading'
import BookShelvesWantToRead from '../BookShelvesWantToRead'
import './index.css'

const BookShelves = () => (
  <BookShelvesContext.Consumer>
    {value => {
      const {search, onSearch, activeNav} = value
      const searchValue = () => {
        onSearch()
      }
      const getComponent = () => {
        switch (true) {
          case activeNav === 'ALL':
            return <BookShelvesAll searchText={search} />
          case activeNav === 'READ':
            return <BookShelvesRead searchText={search} />
          case activeNav === 'CURRENTLY_READING':
            return <BookShelvesCurrentlyReading searchText={search} />
          case activeNav === 'WANT_TO_READ':
            return <BookShelvesWantToRead searchText={search} />
          default:
            return <BookShelvesAll searchText={search} />
        }
      }
      return (
        <>
          <Header />

          {getComponent()}

          <Footer />
        </>
      )
    }}
  </BookShelvesContext.Consumer>
)

export default BookShelves
