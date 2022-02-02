import { Routes, Route } from "react-router-dom"
import CouchList from "./components/CouchList/CouchList";

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/couches" element={<CouchList/>}/>
      </Routes>
    </div>
  );
}

export default App;
