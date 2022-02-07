import axios from "axios"
import "./CouchDetail.css"
import Display from "../../components/Display/Display"
import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import {Container, Row, Col, Button} from "react-bootstrap"
const baseURL = "https://couch-working.herokuapp.com/"

export default function CouchDetail(props) {
  const [couch, setCouch] = useState(null)
  const {id} = useParams()
  const auth = `Headers:
  {Authorization: ${localStorage.getItem("token")}}`
  const user = localStorage.getItem("token")

  const navigate = useNavigate()
  useEffect(() => {
    const fetchCouch = async () => {
      const res = await axios.get(`${baseURL}couch-api/couch/${id}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      // console.log(res.data)
      setCouch(res.data)
    }
    fetchCouch()
  }, [])
  // console.log(auth)
  ///add if block for if couch does not exist

  const routeAllCouches = () => {
    navigate("/couches")
  }

  const routeCouchEdit = () => {
    navigate(`/update/${id}`)
  }

  const handleDelete = async () => {
    if (!user) {
      alert("Please sign in to delete your couch")
    } else {
      await axios.delete(`${baseURL}couch-api/delete/${id}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      navigate("/couches")
    }
  }
  if (!user) {
    return (
      <Display>
        <Container>
          <Row style={{display: "flex", justifyContent: "center"}}>
            <Col xs="12" md="6">
              <h3>Please log in to view the details for this couch.</h3>
              {/* <img className="detail-photo" src={couch?.image_URL} alt={couch?.title} /> */}
            </Col>
            <Col xs="12" md="6" className="couch-info">
              <h1>{couch?.title}</h1>
              <h3>{couch?.location}</h3>
              <p>{couch?.description}</p>
              <h5>Contact Information: {couch?.contactInfo}</h5>
              <Button variant="dark" onClick={routeAllCouches}>
                View All Couches
              </Button>
              <Button variant="dark" onClick={routeCouchEdit}>
                Edit Couch
              </Button>
              <Button variant="dark" onClick={handleDelete}>
                Delete Couch
              </Button>
            </Col>
          </Row>
        </Container>
      </Display>
    )
  } else {
    return (
      <Display>
        <Container>
          <Row style={{display: "flex", justifyContent: "center"}}>
            <Col xs="12" md="6">
              <img className="detail-photo" src={couch?.image_URL} alt={couch?.title} />
            </Col>
            <Col xs="12" md="6" className="couch-info">
              <h1>{couch?.title}</h1>
              <h3>{couch?.location}</h3>
              <p>{couch?.description}</p>
              <h5>Contact Information: {couch?.contactInfo}</h5>
              <Button variant="dark" onClick={routeAllCouches}>
                View All Couches
              </Button>
              <Button variant="dark" onClick={routeCouchEdit}>
                Edit Couch
              </Button>
              <Button variant="dark" onClick={handleDelete}>
                Delete Couch
              </Button>
            </Col>
          </Row>
        </Container>
      </Display>
    )
  }
}
