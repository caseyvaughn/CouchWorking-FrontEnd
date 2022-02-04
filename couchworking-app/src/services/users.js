import axios from "axios"

export const verifyUser = async () => {
  const baseURL = "https://couch-working.herokuapp.com/"
  const token = localStorage.getItem("token")
  if (token) {
    await axios({
      url: `${baseURL}user-api/verify`,
    })
      .then((response) => {
        console.log(response)
        return response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
