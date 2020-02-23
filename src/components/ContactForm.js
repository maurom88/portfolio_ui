import React from 'react'

function ContactForm() {
    return (
        <form action="">
            <div class="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" class="form-control" name="name" placeholder="John Doe" />
                        </div>
                <div class="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" class="form-control" name="email" placeholder="johndoe@example.ca" />
                        </div>
                    <div class="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" class="form-control" name="phone" placeholder="123 456 7890" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" class="form-control" name="subject" placeholder="Hello" />
                        </div>
                            <div class="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea class="form-control" name="message" id="" cols="30" rows="10"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary mb-2">Submit</button>
                        
                    </form>
                        )
                    }
                    
export default ContactForm