import React from 'react'

function Header() {
    return (
        <header>
            <nav class="nav navbar-expand-sm bg-color-5 navbar-light sticky-top">
                <a href="#" class="navbar-brand">
                    <img class="rounded-circle img-fluid img-profile" src="" alt="" />
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/portfolio">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/resume">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact me</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div id="title" class="jumbotron jumbotron-fluid text-center pt-3 pb-5 bg-color-2" style={{marginBottom:0}}>
                <h1 class="display-1">Mauro Meden</h1>
                <p>
                    Full Stack Web Developer
                </p>
            </div>
        </header>
    )
}

export default Header