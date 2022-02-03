import { Routes, Route } from "react-router-dom"
// import { useState, useEffect } from 'react';
import CouchList from "./components/CouchList/CouchList";
import Home from './screens/Home/Home';
import UserSignUp from './screens/UserSignUp/UserSignUp'
import UserSignIn from './screens/UserSignIn/UserSignIn'
import CouchList from './screens/CouchList/CouchList'
import CreateCouch from './screens/CreateCouch/CreateCouch'


import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home user={user}/>}/>
        <Route path="/sign-up" element={<UserSignUp/>}/>
        <Route path="/couches" element={<CouchList/>}/>
        <Route path="/sign-in" element={<UserSignIn/>}/>
        <Route path="/create" element={<CreateCouch/>}/>
        <Route path="/couches" element={<CouchList/>}/>
      </Routes>
    </div>
  );
}

export default App;
