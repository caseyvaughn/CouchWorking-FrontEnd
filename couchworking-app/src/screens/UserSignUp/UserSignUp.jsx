import axios from "axios"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import "./UserSignUp.css"

const default_User = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
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
    e.preventDefault()
    await axios({
      method: "post",
      url: `${baseURL}user-api/sign-up`,
      data: newUser,
    })
      .then((response) => {
        navigate("/")
        return response.data
      })
      .catch((error) => {
        console.log(error)
        navigate("/")
      })
    // await axios.post(`${baseURL}user-api/sign-up`, newUser);
  }

  return (
    <div className="form-container">
      <form
        className="form-container2"
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <fieldset className="field-set3">
          <legend>Sign Up</legend>
          <input
            id="username"
            value={newUser.username}
            placeholder="Username"
            onChange={(e) => {
              handleTextInput(e)
            }}
          ></input>
          <br />
          <input
            id="firstName"
            value={newUser.firstName}
            placeholder="First Name"
            onChange={(e) => {
              handleTextInput(e)
            }}
          ></input>
          <br />
          <input
            id="lastName"
            value={newUser.lastName}
            placeholder="Last Name"
            onChange={(e) => {
              handleTextInput(e)
            }}
          ></input>
          <br />
          <input
            id="email"
            value={newUser.email}
            placeholder="Email"
            onChange={(e) => {
              handleTextInput(e)
            }}
          ></input>
          <br />
          <input
            id="password"
            value={newUser.password}
            placeholder="Password"
            onChange={(e) => {
              handleTextInput(e)
            }}
          ></input>
          <br />
          <button>Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default UserSignUp
