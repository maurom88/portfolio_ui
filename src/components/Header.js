import React from 'react'
import ListLink from './items/ListLink'
import './stylesheet.css';

function Header() {
    return (
        <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded sticky-top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
            <ul class="navbar-nav">
                <ListLink classNameLi="nav-item" classNameA="nav-link" name="Home" url="/" />
                <ListLink classNameLi="nav-item" classNameA="nav-link" name="Portfolio" url="/portfolio"/>
                <ListLink classNameLi="nav-item" classNameA="nav-link" name="Resume" url="/resume"/>
                <ListLink classNameLi="nav-item" classNameA="nav-link" name="Contact me" url="/contact"/>
            </ul>
            </div>
        </nav>

        <div class="header-image">
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-12 text-center">
                        <h1>Mauro Meden</h1>
                        <p>Full Stack Web Developer</p>
                    </div>
                </div>
            </div>
        </div>

        </header>
    )
}

export default Header