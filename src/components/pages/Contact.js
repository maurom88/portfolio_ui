import React from 'react'

import ContactForm from '../ContactForm'

function Contact() {
    return (
        <main>
            <div class="py-5">
                <div class="container">

                <div class="row">
                    <div class="col-6">
                        <div class="card mb-4 shadow-sm bg-dark">
                            <div class="card-body">
                                <div className="row my-3">
                                    <div className="col-sm-12 text-center">
                                        <h2>Get in Touch</h2>
                                    </div>
                                </div>

                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col">
                                            <p>Please send me a message using the form below.</p>

                                            <ContactForm />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </main>
    )
}

export default Contact