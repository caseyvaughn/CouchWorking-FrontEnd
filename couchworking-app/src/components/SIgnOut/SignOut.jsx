import "./SignOut.css";
import Button from "react-bootstrap/Button"

const SignOut = () => {
  const handleSubmit = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token")
      alert("You have signed out.")
    } else {
      alert("You are not signed in.")
    }
  }
  return (
    <Button className="signout-btn" onClick={() => {handleSubmit()}}
      variant="light"
    >
    Sign Out
    </Button>
  )
}

export default SignOut
