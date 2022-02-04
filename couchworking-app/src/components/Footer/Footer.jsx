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
                        <a href="/">Trung</a>
                       <a href="/">Casey</a>
                       <a href="/">Blake</a>
                       <a href="/">Tim</a>
                       </div>
                    </Col>
                </Row>
          
                <Row>
                    <Col>
                    <h3 className="social">LinkedIn</h3>
                    <div className="social-links">
                       <a href="/">Trung</a>
                       <a href="/">Casey</a>
                       <a href="/">Blake</a>
                       <a href="/">Tim</a>
                       </div>
                    </Col>
                </Row>
            </Container>
        </div>
        

        // <Card>
        // <Card.Header>Contact Us</Card.Header>
        // <Card.Body>
        //     <Card.Title>Github</Card.Title>
        //    <a href="/">Trung</a>
        //    <a href="/">Casey</a>
        //    <a href="/">Blake</a>
        //    <a href="/">Tim</a>
        // </Card.Body>
        // <Card.Body>
        //     <Card.Title>LinkIn</Card.Title>
        //    <a href="/">Trung</a>
        //    <a href="/">Casey</a>
        //    <a href="/">Blake</a>
        //    <a href="/">Tim</a>
        // </Card.Body>
        // </Card>
    )
}

export default Footer;
