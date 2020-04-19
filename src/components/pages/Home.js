import React from 'react'
import Service from '../Service'

function Home() {
    return (
        <main className="container">
            <section className="my-3">
                <div className="row my-3">
                    <div className="col-sm-12 text-center">

                        <div id="root"></div>
                        <div id="contact-me"></div>

                        <h2>Welcome to my website</h2>
                    </div>
                </div>
                {/* <div className="row my-3">
                    <div className="col-sm-12">
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
                </div> */}
            </section>

            <section>
                <div className="container">
                    <h3 className="py-3">Services</h3>
                    <div className="row">
                        <Service title="Web Development" />
                        <Service title="Search Engine Optimization" />
                        <Service title="Language Services" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home