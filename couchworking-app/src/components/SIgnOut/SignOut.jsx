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
    <Button onClick={() => {
      handleSubmit()
    }}
      variant="light"
    >
      Sign Out
    </Button>

    // <Button>Sign Out</Button>

  )
}

export default SignOut

// onClick={() => {
//   handleSubmit()
// }}
// >
// Sign Out
// </button>
// )