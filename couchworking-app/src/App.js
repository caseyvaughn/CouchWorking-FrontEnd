import "./App.css"
import {Routes, Route} from "react-router-dom"
import CouchDetail from "./screens/CouchDetail/CouchDetail"
import HomePage from "./screens/HomePage/HomePage"
import UserSignUp from "./screens/UserSignUp/UserSignUp"
import UserSignIn from "./screens/UserSignIn/UserSignIn"
import CouchList from "./screens/CouchList/CouchList"
import CreateCouch from "./screens/CouchCreate/CreateCouch"
import EditCouch from "./screens/CouchEdit/EditCouch"
import {useState, useEffect} from "react"

function App() {
  // const [user, setUser] = useState(null)
  // const [toggle, setToggle] = useState(false)

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const user = await verifyUser()
  //     if (user) {
  //       setUser(user)
  //     } else {
  //       setUser(null)
  //     }
  //   }
  //   fetchUser()
  // }, [])
  // console.log(user)

  const user = localStorage.getItem("token")

  return (
    <div className="App">
      <Routes>
        <Route path="/couch/:id" element={<CouchDetail user={user} />} />
        <Route path="/update/:id" element={<EditCouch user={user} />} />
        <Route
          path="/"
          element={
            <HomePage
            // user={user}
            />
          }
        />
        <Route path="/sign-up" element={<UserSignUp />} />
        <Route path="/couches" element={<CouchList user={user} />} />
        <Route path="/sign-in" element={<UserSignIn />} />
        <Route path="/create" element={<CreateCouch user={user} />} />
      </Routes>
    </div>
  )
}

export default App
