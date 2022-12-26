import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import BookShelvesContext from './context/BookShelvesContext'
import './App.css'
import BookShelves from './components/BookShelves'
import BookDetails from './components/BookDetails'
import NotFound from './components/NotFound'

// use the below bookshelvesList for rendering read status of book items in Bookshelves Route

class App extends Component {
  state = {active: '', activeNav: 'ALL', search: ''}

  onSearch = event => {
    this.setState({search: event.target.id})
  }

  changeNavItem = event => {
    this.setState({activeNav: event.target.id})
  }

  onChangeActive = event => {
    this.setState({active: event.target.id})
    console.log(event.target.id)
  }

  render() {
    const {active, activeNav, search} = this.state
    return (
      <BookShelvesContext.Provider
        value={{
          active,
          changeActive: this.onChangeActive,
          activeNav,
          changeNavItem: this.changeNavItem,
          search,
          onSearch: this.onSearch,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/shelf" component={BookShelves} />
          <ProtectedRoute exact path="/books/:id" component={BookDetails} />
          <Route component={NotFound} />
        </Switch>
      </BookShelvesContext.Provider>
    )
  }
}

export default App
