import React from 'react'
import ListLink from './items/ListLink'

function Header() {
    return (
        <header>
            <nav className="nav navbar-expand-sm navbar-light sticky-top">
                <a href="/" className="navbar-brand">
                    <img className="rounded-circle img-fluid img-profile" src="" alt="" />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                            <ListLink classNameLi="nav-item" classNameA="nav-link" name="Home" url="/" />
                            <ListLink classNameLi="nav-item" classNameA="nav-link" name="Portfolio" url="/portfolio"/>
                            <ListLink classNameLi="nav-item" classNameA="nav-link" name="Resume" url="/resume"/>
                            <ListLink classNameLi="nav-item" classNameA="nav-link" name="Contact me" url="/contact"/>
                    </ul>
                </div>
            </nav>

            <div id="title" className="jumbotron jumbotron-fluid pt-3 pb-5 px-5" style={{marginBottom:0}}>
                <h1 className="text-right display-5">Mauro Meden</h1>
                <p id="fullstack" className="text-left my-0 display-3">Full Stack</p>
                <p id="webdev" className="text-left my-0 display-3">Web Developer</p>
            </div>
        </header>
    )
}

export default Header