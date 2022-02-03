import {Routes, Route} from "react-router-dom";
import CouchList from "./components/CouchList/CouchList";
import UserSignUp from "./screens/UserSignUp/UserSignUp";
import UserSignIn from "./screens/UserSignIn/UserSignIn";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Welcome home</h1>} />
        <Route path="/couches" element={<CouchList />} />
        <Route path="/sign-up" element={<UserSignUp />} />
        <Route path="/sign-in" element={<UserSignIn />} />
      </Routes>
    </div>
  );
}

export default App;
