import React from 'react'

function ContactForm() {
    return (
        <form action="">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" name="name" placeholder="John Doe" />
                        </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" name="email" placeholder="johndoe@example.ca" />
                        </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" className="form-control" name="phone" placeholder="123 456 7890" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" className="form-control" name="subject" placeholder="Hello" />
                        </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea className="form-control" name="message" id="" cols="30" rows="10"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2">Submit</button>
                        
                    </form>
                        )
                    }
                    
export default ContactForm