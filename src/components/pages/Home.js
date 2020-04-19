import React, { useState } from 'react'
import Service from '../Service'

import Contact from './Contact'
import Portfolio from './Portfolio.js'
import Resume from './Resume'

function Home() {
    return (
        <main className="container">
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

            <section>
                <Portfolio />
            </section>

            <section>
                <Resume />
            </section>

            <section>
                <Contact />
            </section>

        </main>
    )
}

export default Home