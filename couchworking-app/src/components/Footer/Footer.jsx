import './Footer.css';
import {Container, Row, Col} from 'react-bootstrap';

const Footer = () => {

    return (  
        <div className="footer-container">
             <h2 className="footer-start">Contact Us</h2>
            <Container>
                <Row>
                    <Col>
                    <h3 className="social">Github</h3>
                    <div className="social-links">
                       <a className="social-link" href="/">Trung</a>
                       <a className="social-link" href="/">Casey</a>
                       <a className="social-link" href="/">Blake</a>
                       <a className="social-link" href="/">Tim</a>
                       </div>
                    </Col>
                </Row>
          
                <Row>
                    <Col>
                    <h3 className="social">LinkedIn</h3>
                    <div className="social-links">
                       <a className="social-link" href="/">Trung</a>
                       <a className="social-link" href="/">Casey</a>
                       <a className="social-link" href="/">Blake</a>
                       <a className="social-link" href="/">Tim</a>
                       </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;
