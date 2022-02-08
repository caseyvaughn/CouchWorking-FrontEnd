import axios from "axios"
import jwtDecode from "jwt-decode"
import {useState} from "react"
import Button from "react-bootstrap/Button"
import "./UserSignIn.css"

const default_User = {
  username: "",
  password: "",
}

const baseURL = "https://couch-working.herokuapp.com/"

const UserSignIn = () => {
  const [user, setUser] = useState(default_User)
  const [toggle, setToggle] = useState(false)

  const handleTextInput = (e) => {
    const {id, value} = e.target
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios({
      method: "post",
      url: `${baseURL}user-api/sign-in`,
      data: user,
    })
      .then((response) => {
        const token = response.data.data
        if (token === undefined) {
          alert("Error signing in. Please try again")
        } else {
          alert("Login successful")
          localStorage.setItem("token", token)
          localStorage.setItem("username", user.username)
          setToggle(false)
        }
      })
      .catch((error) => {
        console.log(error)
      })
    window.location.reload(false)
  }

  let field = "fieldset1"

  const toggleClass = () => {
    setToggle(!toggle)
  }

  if (toggle === false) {
    field = "fieldset1"
  } else {
    field = "fieldset2"
  }

  return (
    <div>
      <Button
        className="signin-button"
        onClick={(e) => {
          toggleClass(e)
        }}
        variant="light"
      >
        Sign In
      </Button>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <fieldset className={field}>
            <legend className="legend1">Sign In</legend>
            <input
              id="username"
              value={user.username}
              placeholder="username"
              onChange={(e) => {
                handleTextInput(e)
              }}
            ></input>
            <br />
            <input
              id="password"
              value={user.password}
              placeholder="password"
              onChange={(e) => {
                handleTextInput(e)
              }}
            ></input>
            <br />
            <Button type="submit" variant="dark">
              Sign In
            </Button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default UserSignIn
