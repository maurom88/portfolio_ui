import React from 'react'
import Service from '../Service'

function Home() {
    return (
        <section>
            <div className="row my-3">
                <div className="col-sm-12 text-center">
                    <h2>Services</h2>
                </div>
            </div>

            <div className="row">
                <Service title="Web Development" />
                <Service title="Search Engine Optimization" />
                <Service title="Language Services" />
            </div>
        </section>
    )
}

export default Home