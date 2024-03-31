import './contact.css';

function Contact() {
    return (
        <div>
            <div className="Hours">
                <div>
                    <h3>Hours:</h3>
                </div>
                <div>
                    <p>Monday-Thursday: 10am-8pm</p>
                    <p>Friday-Saturday: 10am-9pm</p>
                    <p>Sunday: 11am-6pm</p>
                    <p>Sunday: CLOSED</p>
                </div>
            </div>
            <div className="Address">
                <div>
                    <h3>Address:</h3>
                </div>
                <div>
                    <p>205 Humber College Blvd</p>
                    <p>Etobicoke, ON</p>
                    <p>M9W 5L7</p>
                    <p>Canada</p>
                </div>
            </div>
            <div className="Contact">
                <div>
                    <h3>Contact:</h3>
                </div>
                <div>
                    <p>(437)583-8942</p>
                </div>
            </div>
            <a href="https://maps.app.goo.gl/PmJh7dzEW4Ru5jUJ7">DIRECTIONS</a>
        </div >
    );
}

export default Contact;