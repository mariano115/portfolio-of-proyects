import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <Form className='contact-form'>
                <Form.Group className="form-group" controlId="name">
                    <Form.Control size="lg" type="text" placeholder="Your name" />
                </Form.Group>

                <Form.Group className="form-group" controlId="email">
                    <Form.Control type="email" placeholder="Your e-mail" />
                </Form.Group>

                <Form.Group className="form-group" controlId="subject">
                    <Form.Control type="email" placeholder="Enter subject" />
                </Form.Group>

                <Form.Group className="form-group" controlId="Message">
                    <Form.Control type="email" placeholder="Enter your message" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Contact;