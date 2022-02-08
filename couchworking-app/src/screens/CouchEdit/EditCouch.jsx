import {useNavigate, useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import Display from "../../components/Display/Display"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import axios from "axios"
import "./EditCouch.css"

const default_input = {
  username: "",
  title: "",
  description: "",
  location: "",
  image_URL: "",
  contactInfo: "",
}

export default function CouchEdit() {
  const [input, setInput] = useState(default_input)
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(() => {
    const fetchCouch = async () => {
      const res = await axios.get(`https://couch-working.herokuapp.com/couch-api/couch/${id}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      setInput(res.data)
    }
    fetchCouch()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = localStorage.getItem("token")
    const username = localStorage.getItem("username")
    if (!user) {
      alert("Please sign in to edit your couch")
    } else if (username !== input.username) {
      alert("Can not edit another user's couch")
    } else {
      const fields = input
      await axios.put(`https://couch-working.herokuapp.com/couch-api/update/${id}`, fields, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      setInput(default_input)
      navigate(`/couch/${id}`)
    }
  }

  const handleTextInput = (e) => {
    const {id, value} = e.target
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }))
  }

  return (
    <div>
      <Display>
        {/* <h2>Thank you for updating your CouchWorking place!</h2> */}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={input.title}
              id="title"
              placeholder="Enter title"
              onChange={(e) => {
                handleTextInput(e)
              }}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={input.description}
              id="description"
              placeholder="Enter description"
              onChange={(e) => {
                handleTextInput(e)
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              value={input.location}
              id="location"
              placeholder="Enter location"
              onChange={(e) => {
                handleTextInput(e)
              }}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              value={input.image_URL}
              id="image_URL"
              placeholder="Enter image URL"
              onChange={(e) => {
                handleTextInput(e)
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contact Information</Form.Label>
            <Form.Control
              type="text"
              value={input.contactInfo}
              id="contactInfo"
              placeholder="Enter contact information"
              onChange={(e) => {
                handleTextInput(e)
              }}
            />
          </Form.Group>
          <Button variant="dark" onClick={handleSubmit}>
            Edit Couch
          </Button>
        </Form>
      </Display>
    </div>
  )
}
