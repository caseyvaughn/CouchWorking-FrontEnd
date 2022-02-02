import { Routes, Route } from "react-router-dom"
import CouchList from "./components/CouchList/CouchList";

import './App.css';
import CreateCouch from "./screens/CouchCreate/CreateCouch";
import EditCouch from "./screens/CouchEdit/EditCouch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/couches" element={<CouchList/>}/>
        <Route path = "/create" element={<CreateCouch/>}/>
        <Route path = "/update/:id" element={<EditCouch/>}/>
      </Routes>
    </div>
  );
}

export default App;
