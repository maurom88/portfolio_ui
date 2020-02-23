import React from 'react'

function Home() {
    return (
        <main class="container">
            <div class="row my-3">
                <div class="col-sm-12 text-center">

                    <div id="root"></div>
                    <div id="contact-me"></div>

                    <h2>Welcome to my website</h2>
                </div>
            </div>

            <section>
                <div class="row my-3">
                    <div class="col-sm-3">
                        <p>
                            A column on the left of the page with a list
                        <ul class="list-group border-0">
                                <li class="list-group-item border-0">
                                    <a href="#">First Element</a>
                                </li>
                                <li class="list-group-item border-0">
                                    <a href="#">Second element</a>
                                </li>
                                <li class="list-group-item border-0">
                                    <a href="#">Third element</a>
                                </li>
                                <li class="list-group-item border-0">
                                    <a href="#">Fourth element</a>
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div class="col-sm-7">
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