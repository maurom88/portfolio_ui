import React from 'react'

function Header() {
    return (
        <header>
            <nav className="nav navbar-expand-sm bg-color-5 navbar-light sticky-top">
                <a href="/" className="navbar-brand">
                    <img className="rounded-circle img-fluid img-profile" src="" alt="" />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact me</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div id="title" className="jumbotron jumbotron-fluid text-center pt-3 pb-5 bg-color-2" style={{marginBottom:0}}>
                <h1 className="display-1">Mauro Meden</h1>
                <p>
                    Full Stack Web Developer
                </p>
            </div>
        </header>
    )
}

export default Header