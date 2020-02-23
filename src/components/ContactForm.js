import React, {useState} from 'react'

function ContactForm() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [subject, setSubject] = useState()
    const [message, setMessage] = useState()

    function handleSubmit(event) {
        event.preventDefault();
        let url = "https://localhost:9000/contact_us/post"

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({name, email, phone, subject, message})
        })
        .then(response => response.json())
        .then(response => console.log(response))
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

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input onChange={handleNameInput} type="text" className="form-control" name="name" placeholder="John Doe" />
                        </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input onChange={handleEmailInput} type="email" className="form-control" name="email" placeholder="johndoe@example.ca" />
                        </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onChange={handlePhoneInput} type="tel" className="form-control" name="phone" placeholder="123 456 7890" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input onChange={handleSubjectInput} type="text" className="form-control" name="subject" placeholder="Hello" />
                        </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea onChange={handleMessageInput} className="form-control" name="message" id="" cols="30" rows="10"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2">Submit</button>
                        
                    </form>
                        )
                    }
                    
export default ContactForm