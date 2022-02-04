import './Footer.css';
import {Card, Button} from 'react-bootstrap';

const Footer = () => {

    return (

        <Card>
        <Card.Header>Contact Us</Card.Header>
        <Card.Body>
            <Card.Title>Github</Card.Title>
            <Button variant="primary"><a href="/">Trung</a></Button>
            <Button variant="primary"><a href="/">Casey</a></Button>
            <Button variant="primary"><a href="/">Blake</a></Button>
            <Button variant="primary"><a href="/">Tim</a></Button>
        </Card.Body>
        <Card.Body>
            <Card.Title>LinkIn</Card.Title>
            <Button variant="primary"><a href="/">Trung</a></Button>
            <Button variant="primary"><a href="/">Casey</a></Button>
            <Button variant="primary"><a href="/">Blake</a></Button>
            <Button variant="primary"><a href="/">Tim</a></Button>
        </Card.Body>
        </Card>
    )
}

export default Footer;
