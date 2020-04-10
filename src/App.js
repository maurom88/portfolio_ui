import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Contact from './components/pages/Contact'
import ContactList from './components/pages/ContactList'
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio.js'
import Resume from './components/pages/Resume'
import Users from './components/pages/Users.js'
import UsersList from './components/pages/UsersList.js'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/contact/list" component={ContactList} exact />
          <Route path="/portfolio" component={Portfolio} exact />
          <Route path="/resume" component={Resume} exact />
          <Route path="/users/signup" component={Users} exact />
          <Route path="/users" component={UsersList} exact />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
