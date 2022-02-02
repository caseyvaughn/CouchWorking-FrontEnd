import { Routes, Route } from "react-router-dom"
import CouchList from "./components/CouchList/CouchList";

import './App.css';
import CreateCouch from "./screens/CouchCreate/CreateCouch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/couches" element={<CouchList/>}/>
        <Route path = "/create" element={<CreateCouch/>}/>
      </Routes>
    </div>
  );
}

export default App;
