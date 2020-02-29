import React, { useState } from 'react'

function ContactForm() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [subject, setSubject] = useState()
    const [message, setMessage] = useState()

    function handleSubmit(event) {
        event.preventDefault()
        let contactForm = document.getElementById("contactForm")
        console.log(name, email)
        let url = "http://localhost:9000/contact/post"

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phone, subject, message })
        })
            .then(response => response.json())
            .then(response => console.log(response))
            .then(hideForm())
            .catch(error => console.log(error))
    }

    function handleNameInput(event) {
        setName(event.target.value)
    }

    function handleEmailInput(event) {
        setEmail(event.target.value)
    }

    function handlePhoneInput(event) {
        setPhone(event.target.value)
    }

    function handleSubjectInput(event) {
        setSubject(event.target.value)
    }

    function handleMessageInput(event) {
        setMessage(event.target.value)
    }

    // Hide the form and confirm submmission with a message
    function hideForm() {
        document.getElementById("contactForm").style.display = "none";
        document.getElementById("submitMessage").style.display = "";
    }

    return (
        <div>
            <div id="submitMessage" style={{ display: "none" }}>
                <p>
                    Thank you for your message.<br />
                    I'll get back to you as soon as possible.
                </p>
            </div>
            <form id="contactForm" onSubmit={handleSubmit} style={{ display: "" }}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={handleNameInput} type="text" className="form-control" name="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input onChange={handleEmailInput} type="email" className="form-control" name="email" placeholder="johndoe@example.ca" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input onChange={handlePhoneInput} type="tel" className="form-control" name="phone" placeholder="123 456 7890" />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input onChange={handleSubjectInput} type="text" className="form-control" name="subject" placeholder="Hello" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea onChange={handleMessageInput} className="form-control" name="message" id="" cols="30" rows="10" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Submit</button>

            </form>
        </div>
    )
}

export default ContactForm