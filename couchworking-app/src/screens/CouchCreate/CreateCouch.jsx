import "./CreateCouch.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const default_input = {
  "title": "",
  "description": "",
  "location": "",
  "image_URL": "",
  "contactInfo": "",
  }

export default function CreateCouch() {
    const [input, setInput] = useState(default_input);
  let navigate = useNavigate();
  
    const handleTextInput = (event) =>{
        const {id, value} = event.target;
        setInput((prevInput)=>({
            ...prevInput,
            [id]: value,
        }))
    }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = input;
    const res = await axios.post(`https://couch-working.herokuapp.com/couch-api/create`, fields);
    console.log(res);
    setInput(default_input);
    navigate("/create");
  }

  return (
    <div>
      <h2>Thank you for offering your CouchWorking place!!</h2>
        <form onSubmit={handleSubmit} id="postForm">
            <label htmlFor="title">Title</label>
            <input type="text" value={input.title} id='title' onChange={handleTextInput} required/>
            <label htmlFor="description">Description</label>
            <input type="text" value={input.description} id='description' onChange={handleTextInput}/>
            <label htmlFor="location">Location</label>
            <input type="text" value={input.location} id='location' onChange={handleTextInput} required/>
            <label htmlFor="image_URL">Image URL</label>
            <input type="text" value={input.image_URL} id='image_URL' onChange={handleTextInput}/>
            <label htmlFor="contactInfo">Contant info</label>
            <input type="text" value={input.contactInfo} id='contactInfo' onChange={handleTextInput}/>
            <button>Submit</button>
        </form>
      </div>
  )
}
