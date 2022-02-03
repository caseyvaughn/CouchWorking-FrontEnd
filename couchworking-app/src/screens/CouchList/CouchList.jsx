import axios from "axios"
import "./couchlist.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import { Card, Container, Row, Col } from 'react-bootstrap';

const baseURL = "https://couch-working.herokuapp.com/"

export default function CouchList() {
  const [couches, setCouches] = useState([])
  useEffect(() => {
    const fetchCouches = async () => {
      const res = await axios.get(`${baseURL}couch-api/couches`)
      console.log(res.data)
      setCouches(res.data.data)
      console.log(couches);
    }
    fetchCouches();
  }, [])

  return(
    <div>
      <Container className="grid">
        <Row>
        {couches.map((couch) => {
          return (
            <Col xs="12" sm="6" lg="4" xl="3">
                {/* <Link to={`/couch/${couch._id}`} style={{ textDecoration: 'none' }}> */}
                  <Card
                    style={{ width: "250px", height: "300px" }}
                    key={couch._id}>
                    <Card.Img variant="top" src={couch.image_URL} alt={couch.title}></Card.Img>
                    <Card.Body>
                      <Card.Title>{couch.title}</Card.Title>
                      <Card.Text>{couch.location}</Card.Text>
                    </Card.Body>
                  </Card>
                {/* </Link> */}
            </Col>
          )
        })}
        </Row>
      </Container>
    </div>
  )
}