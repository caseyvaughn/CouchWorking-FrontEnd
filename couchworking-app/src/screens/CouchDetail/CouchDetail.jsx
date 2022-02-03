import axios from "axios"
import "./CouchDetail.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Card, Container, Row, Col } from 'react-bootstrap';


const baseURL = "https://couch-working.herokuapp.com/"


export default function CouchDetail() {
  const [couch, setCouch] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchCouch = async () => {
      const res = await axios.get(`${baseURL}couch-api/couch/${id}`)
      console.log(res.data)
      setCouch(res.data);
    }
    fetchCouch();
  }, [])

  ///add if block for if couch does not exist

  return (
      <Container>
        <Row> 
          <Col><img src={couch?.image_URL} alt={couch?.title} /></Col>
          <Col className="couch-info">
              <h1>{couch?.title}</h1>
              <h3>{couch?.location}</h3>
              <p>{couch?.description}</p>
              <h5>Contact Information: {couch?.contactInfo}</h5>
          </Col>
        </Row>
      </Container>
  )
}