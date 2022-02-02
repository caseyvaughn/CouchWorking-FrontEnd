import axios from "axios"
// import api from "../services/apiConfig.js"
import { useState, useEffect } from "react"
const baseURL = "https://couch-working.herokuapp.com/"


export default function CouchList() {
  const [couch, setCouch] = useState([])

  useEffect(() => {
    const fetchCouches = async () => {
      const res = await axios.get(`${baseURL}couch-api/couches`)
      console.log(res.data)
    }
    fetchCouches();
  }, [])
  return <div>{couch}</div>
}

