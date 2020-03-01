import React from 'react'
import ListLink from '../items/ListLink'

function Home() {
    return (
        <main className="container">
            <div className="row my-3">
                <div className="col-sm-12 text-center">

                    <div id="root"></div>
                    <div id="contact-me"></div>

                    <h2>Welcome to my website</h2>
                </div>
            </div>

            <section>
                <div className="row my-3">
                    <div className="col-sm-3">
                        <p>
                            A column on the left of the page with a list
                        </p>
                        <ul className="list-group border-0">
                            <ListLink classNameLi="list-group-item border-0" name="First Element" url="/" />
                            <ListLink classNameLi="list-group-item border-0" name="Second Element" url="/portfolio" />
                            <ListLink classNameLi="list-group-item border-0" name="Third Element" url="/resume" />
                            <ListLink classNameLi="list-group-item border-0" name="Fourth Element" url="/contact" />
                        </ul>
                    </div>
                    <div className="col-sm-7">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quisquam blanditiis
                            similique?
                            Voluptatum
                            repudiandae commodi sapiente fugiat exercitationem, itaque illum unde ex quis labore totam
                            minima
                            accusamus
                            inventore perspiciatis doloribus.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home