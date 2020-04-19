import React from 'react'

import Home from './Home'
import Contact from './Contact'
import Portfolio from './Portfolio.js'
import Resume from './Resume'

function Container() {
    return (
        <main className="container">
            <Home />
            <Portfolio />
            <Resume />
            <Contact />
        </main>
    )
}

export default Container