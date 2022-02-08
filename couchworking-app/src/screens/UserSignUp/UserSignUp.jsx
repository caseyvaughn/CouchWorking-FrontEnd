import axios from "axios"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Display from "../../components/Display/Display"
import "./UserSignUp.css"

const default_User = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const baseURL = "https://couch-working.herokuapp.com/"

const UserSignUp = () => {
  const [newUser, setNewUser] = useState(default_User)
  const navigate = useNavigate()

  const handleTextInput = (e) => {
    const {id, value} = e.target
    setNewUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    if (newUser.password !== newUser.confirmPassword) {
      e.preventDefault()
      alert("Passwords must match - please change and try again!")
    } else {
      e.preventDefault()
      await axios({
        method: "post",
        url: `${baseURL}user-api/sign-up`,
        data: newUser,
      })
        .then(() => {
          navigate("/")
        })
        .catch((error) => {
          console.log(error)
          navigate("/")
        })
    }
    // await axios.post(`${baseURL}user-api/sign-up`, newUser);
  }

  return (
    <div>
      <Display>
        <Form
          className="signup-form"
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              id="username"
              value={newUser.username}
              placeholder="Username"
              onChange={(e) => {
                handleTextInput(e)
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              id="firstName"
              value={newUser.firstName}
              placeholder="First Name"
              onChange={(e) => {
                handleTextInput(e)
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              id="lastName"
              value={newUser.lastName}
              placeholder="Last Name"
              onChange={(e) => {
                handleTextInput(e)
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              id="email"
              value={newUser.email}
              placeholder="Email"
              onChange={(e) => {
                handleTextInput(e)
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="password"
              value={newUser.password}
              placeholder="Password"
              type="password"
              onChange={(e) => {
                handleTextInput(e)
              }}
            />
          </Form.Group>

          <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
            <Form.Control id="confirmPassword"
            value={newUser.confirmPassword}
            placeholder="Confirm password"
            type = "password"
            onChange={(e) => {
              handleTextInput(e)
            }} />
          </Form.Group>


          <Button type="submit" variant="dark">
            Create Account
          </Button>

        </Form>
      </Display>
    </div>
  )
}

export default UserSignUp
