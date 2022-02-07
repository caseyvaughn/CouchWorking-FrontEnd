const SignOut = () => {
  const handleSubmit = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token")
      alert("You have signed out.")
      window.location.reload(false)
    } else {
      alert("You are not signed in.")
    }
  }
  return (
    <button
      onClick={() => {
        handleSubmit()
      }}
    >
      Sign Out
    </button>
  )
}

export default SignOut
