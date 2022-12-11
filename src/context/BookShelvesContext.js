import React from 'react'

const BookShelvesContext = React.createContext({
  active: '',
  changeActive: () => {},
  activeNav: '',
  changeNavItem: () => {},
  search: '',
  onSearch: () => {},
})

export default BookShelvesContext
