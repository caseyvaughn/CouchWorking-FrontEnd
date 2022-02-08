import axios from "axios"
import "./couchlist.css"

import Display from "../../components/Display/Display"
import Search from "../../components/Search/Search"
import Sort from "../../components/Sort/Sort"
import {asc, desc} from "../../utilities/Sort.js"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {Card, Container, Row, Col} from "react-bootstrap"

const baseURL = "https://couch-working.herokuapp.com/"

export default function CouchList() {
  const [couches, setCouches] = useState([])
  const [searchParams, setSearchParams] = useState([])
  const [sort, setSort] = useState(false)
  const [sortParams, setSortParams] = useState("location-ascending")

  useEffect(() => {
    const fetchCouches = async () => {
      const res = await axios.get(`${baseURL}couch-api/couches`)
      console.log(res.data)
      setCouches(res.data.data)
      setSearchParams(res.data.data)
    }
    fetchCouches()
  }, [])

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortParams(type)
    }
    if (type === "location-ascending") {
      setSearchParams(asc(searchParams))
    } else if (type === "location-descending") {
      setSearchParams(desc(searchParams))
      // } else if (type === 'title-ascending') {
      //   setSearchParams(asc(searchParams))
      // } else if (type === 'title-descending') {
      //   setSearchParams(desc(searchParams))
    } else {
      type = "No results match"
    }
  }

  if (sort) {
    handleSort(sortParams)
    setSort(false)
  }

  const handleSearch = (e) => {
    const searchResults = couches.filter((couch) => 
    couch.location.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearchParams(searchResults)
    setSort(true)
  }

  const user = localStorage.getItem("token")

  const handleSubmit = (e) => e.preventDefault()

  return (
    <div>
      <Display>
        <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
        <Sort onSubmit={handleSubmit} handleSort={handleSort} />
        <Container className="grid">
          <Row>
            {searchParams.map((couch) => {
              return (
                <Col xs="12" sm="6" lg="4" xl="3" style={{display: "flex", justifyContent: "center"}}>
                  <Link to={`/couch/${couch._id}`} style={{textDecoration: "none"}}>
                    <Card bg={"dark"} style={{width: "250px", height: "300px"}} key={couch._id}>
                      <Card.Img variant="top" src={couch.image_URL} alt={couch.title}></Card.Img>
                      <Card.Body>
                        <Card.Title>{couch.title}</Card.Title>
                        <Card.Text>{couch.location}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              )
            })}
          </Row>
        </Container>
      </Display>
    </div>
  )
}
