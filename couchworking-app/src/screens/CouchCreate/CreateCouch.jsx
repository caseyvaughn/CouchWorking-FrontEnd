import "./CreateCouch.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Display from "../../components/Display/Display";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"

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
    const res = await axios.post(`https://couch-working.herokuapp.com/couch-api/create`, fields, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      }
    });
    console.log(res);
    setInput(default_input);
    navigate("/couches");
  }

  return (
    <div>
      <Display>
        {/* <h2>Thank you for offering your CouchWorking place!</h2> */}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={input.title} id='title' placeholder="Enter title" onChange={handleTextInput} required/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={input.description} id='description' placeholder="Enter description" onChange={handleTextInput}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" value={input.location} id='location' placeholder="Enter location" onChange={handleTextInput} required/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" value={input.image_URL} id='image_URL' placeholder="Enter image URL" onChange={handleTextInput}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Contact Information</Form.Label>
            <Form.Control type="text" value={input.contactInfo} id='contactInfo' placeholder="Enter contact information"onChange={handleTextInput}/>
          </Form.Group>
          <Button variant="dark" type="submit" onClick={handleSubmit}>Create Couch</Button>
        </Form>
        </Display>
      </div>
  )

  // return (
  //   <Display>
  //     <h2>Thank you for offering your CouchWorking place!!</h2>
  //       <form onSubmit={handleSubmit} id="postForm">
  //           <label htmlFor="title">Title</label>
  //           <input type="text" value={input.title} id='title' onChange={handleTextInput} required/>
  //           <label htmlFor="description">Description</label>
  //           <input type="text" value={input.description} id='description' onChange={handleTextInput}/>
  //           <label htmlFor="location">Location</label>
  //           <input type="text" value={input.location} id='location' onChange={handleTextInput} required/>
  //           <label htmlFor="image_URL">Image URL</label>
  //           <input type="text" value={input.image_URL} id='image_URL' onChange={handleTextInput}/>
  //           <label htmlFor="contactInfo">Contant info</label>
  //           <input type="text" value={input.contactInfo} id='contactInfo' onChange={handleTextInput}/>
  //           <button>Submit</button>
  //       </form>
  //   </Display>
  // )
}
