import axios from "axios"
// import api from "../services/apiConfig"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
const baseURL = "https://couch-working.herokuapp.com/"

export default function CouchList() {
  const [couches, setCouches] = useState([])
  useEffect(() => {
    const fetchCouches = async () => {
      const res = await axios.get(`${baseURL}couch-api/couches`)
      console.log(res.data)
      setCouches(res.data.data)
      console.log(couches);
    }
    fetchCouches();
  }, [])

  return(
    <div>
      <ul>
        {couches.map((couch) => {
          return (
            <li key={couch._id}> 
              <Link to={`/couch/${couch._id}`}>
                <h1>{couch.title}</h1>
              </Link>
              <img src={couch.image_URL} alt={couch.title}/>
              <h3>{couch.location}</h3>
              <p>{couch.description}</p>
              <h5>{couch.contactInfo}</h5>   
            </li>
          )
        })}
      </ul>
    </div>
  )
}