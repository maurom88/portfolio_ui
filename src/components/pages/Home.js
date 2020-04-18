import React from 'react'
import ListLink from '../items/ListLink'

function Home() {
    return (
        <main className="container home">
            
            <section class="jumbotron text-center bg-dark">
                <div class="container">
                    <h1>Welcome to my Site!</h1>
                    <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                </div>
            </section>

        <div class="py-5 bg-dark">
            <div class="container">
               <h3>Services</h3>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="225"><rect width="100%" height="100%" fill="#55595c"/></svg>
                            <div class="card-body">
                                <p class="card-text">Description of a service you offer?</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="225"><rect width="100%" height="100%" fill="#55595c"/></svg>
                            <div class="card-body">
                                <p class="card-text">Description of a service you offer?</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="225"><rect width="100%" height="100%" fill="#55595c"/></svg>
                            <div class="card-body">
                                <p class="card-text">Description of a service you offer?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </main>
    )
}

export default Home