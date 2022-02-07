import "./App.css"
import {Routes, Route} from "react-router-dom"
import CouchDetail from "./screens/CouchDetail/CouchDetail"
import HomePage from "./screens/HomePage/HomePage"
import UserSignUp from "./screens/UserSignUp/UserSignUp"
import CouchList from "./screens/CouchList/CouchList"
import CreateCouch from "./screens/CouchCreate/CreateCouch"
import EditCouch from "./screens/CouchEdit/EditCouch"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/couch/:id" element={<CouchDetail />} />
        <Route path="/update/:id" element={<EditCouch />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<UserSignUp />} />
        <Route path="/couches" element={<CouchList />} />
        <Route path="/create" element={<CreateCouch />} />
      </Routes>
    </div>
  )
}

export default App
