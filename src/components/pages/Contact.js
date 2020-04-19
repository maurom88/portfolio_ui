import React from 'react'

import ContactForm from '../ContactForm'

function Contact() {
    return (
        <section>
            <div className="row my-3">
                <div className="col-sm-12 text-center">
                    <h2>Get in Touch</h2>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-7">
                        <p>Please send me a message using the form below.</p>

                        <ContactForm />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact