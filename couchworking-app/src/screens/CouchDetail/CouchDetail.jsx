import axios from "axios"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
const baseURL = "https://couch-working.herokuapp.com/"

export default function CouchDetail() {
  const [couch, setCouch] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchCouch = async () => {
      const res = await axios.get(`${baseURL}couch-api/couch/${id}`)
      console.log(res.data)
      setCouch(res.data);
    }
    fetchCouch();
  }, [])


  ///add if block for if couch does not exist

  return (
    <div>
      <h1>{couch?.title}</h1>
      <img src={couch?.image_URL} alt={couch?.title} />
      <h3>{couch?.location}</h3>
      <p>{couch?.description}</p>
      <h5>{couch?.contactInfo}</h5>
    </div>
  )
}