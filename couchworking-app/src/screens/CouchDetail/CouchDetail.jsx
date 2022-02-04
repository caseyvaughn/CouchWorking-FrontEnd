import axios from "axios"
import "./CouchDetail.css"
import Display from '../../components/Display/Display';
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Card, Container, Row, Col, Button } from 'react-bootstrap';


const baseURL = "https://couch-working.herokuapp.com/"


export default function CouchDetail() {
  const [couch, setCouch] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCouch = async () => {
      const res = await axios.get(`${baseURL}couch-api/couch/${id}`)
      console.log(res.data)
      setCouch(res.data);
    }
    fetchCouch();
  }, [id])

  ///add if block for if couch does not exist


  const routeAllCouches = () => {
    navigate('/couches')
  }

  const routeCouchEdit = () => {
    navigate(`/update/${id}`)
  }

  return (
    <Display>
      <Container>
        <Row style={{display: "flex", justifyContent: "center"}}> 
          <Col xs="12" md="6"><img className="detail-photo" src={couch?.image_URL} alt={couch?.title} /></Col>
          <Col xs="12" md="6" className="couch-info">
              <h1>{couch?.title}</h1>
              <h3>{couch?.location}</h3>
              <p>{couch?.description}</p>
              <h5>Contact Information: {couch?.contactInfo}</h5>
            <Button variant="dark" onClick={routeAllCouches}>View All Couches</Button>
            <Button variant="dark" onClick={routeCouchEdit}>Edit Couch</Button>
          </Col>
        </Row>
      </Container>
      </Display>
  )
}