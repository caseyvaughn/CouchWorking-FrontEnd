import axios from "axios"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import "./UserSignIn.css"

const default_User = {
  username: "",
  password: "",
}

const baseURL = "https://couch-working.herokuapp.com/"

const UserSignIn = () => {
  const [user, setUser] = useState(default_User)
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

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
        return response.data
      })
      .catch((error) => {
        console.log(error)
      })
    navigate("/")
  }

  let field = "fieldset1"

  const toggleClass = () => {
    setToggle(!toggle)
  }

  if (toggle == false) {
    field = "fieldset1"
  } else {
    field = "fieldset2"
  }

  return (
    <div>
      <button
        onClick={(e) => {
          toggleClass(e)
        }}
      >
        {" "}
        Sign In
      </button>
      <div className="form-container">
        <form
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
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
            <button>Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default UserSignIn
