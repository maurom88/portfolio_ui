import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Contact from './components/pages/Contact'
import ContactList from './components/pages/ContactList'
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio.js'
import Resume from './components/pages/Resume'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Contact" component={Contact} exact />
          <Route path="/Contact/list" component={ContactList} exact />
          <Route path="/Portfolio" component={Portfolio} exact />
          <Route path="/Resume" component={Resume} exact />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
