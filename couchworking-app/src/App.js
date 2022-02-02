import { Routes, Route } from "react-router-dom"
import CouchList from "./screens/CouchList/CouchList";
import CouchDetail from "./screens/CouchDetail/CouchDetail";

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/couches" element={<CouchList />} />
        <Route path = "/couch/:id" element={<CouchDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
