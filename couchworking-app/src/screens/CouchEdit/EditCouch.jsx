import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Display from '../../components/Display/Display';
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import "./EditCouch.css"

const default_input = {
  "title": "",
  "description": "",
  "location": "",
  "image_URL": "",
  "contactInfo": "",
  }

export default function CouchEdit() {
  const [input, setInput] = useState(default_input);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchCouch = async () => {
      const res = await axios.get(`https://couch-working.herokuapp.com/couch-api/couch/${id}`,{
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      } );
      // console.log(res)
      // console.log(res.data);
      setInput(res.data);
    };
    fetchCouch();
  }, [id]);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const fields = input;
    // await axios.put(`https://couch-working.herokuapp.com/couch-api/update/${id}`, fields);
    const res = await axios.put(`https://couch-working.herokuapp.com/couch-api/update/${id}`, fields, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
  
    console.log(res.data)
    // setInput(default_input);
    navigate(`/couch/${id}`);
  };

  const handleTextInput = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  const routeCouchDetail = () => {
    navigate(`/couch/${id}`)
  }

  return (
    <div>
      <Display>
        {/* <h2>Thank you for updating your CouchWorking place!</h2> */}
        <Form onSubmit={(e) => { handleSubmit(e) }}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={input.title} id='title' placeholder="Enter title" onChange={(e) => { handleTextInput(e) }} required/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={input.description} id='description' placeholder="Enter description" onChange={(e) => { handleTextInput(e) }}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" value={input.location} id='location' placeholder="Enter location" onChange={(e) => { handleTextInput(e) }} required/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" value={input.image_URL} id='image_URL' placeholder="Enter image URL" onChange={(e) => { handleTextInput(e) }}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Contact Information</Form.Label>
            <Form.Control type="text" value={input.contactInfo} id='contactInfo' placeholder="Enter contact information" onChange={(e) => { handleTextInput(e) }}/>
          </Form.Group>
          <Button variant="dark">Edit Couch</Button>
        </Form>
        </Display>
      </div>
  )
}

//Tim's original code
// return (
//   <div>
//     <Display>
//     <h2>Thank you for updating your CouchWorking place!!</h2>
//       <form onSubmit={handleSubmit} id="postForm">
//           <label htmlFor="title">Title</label>
//           <input type="text" value={input.title} id='title' onChange={handleTextInput} required/><br />
//           <label htmlFor="description">Description</label>
//           <input type="text" value={input.description} id='description' onChange={handleTextInput}/><br />
//           <label htmlFor="location">Location</label>
//           <input type="text" value={input.location} id='location' onChange={handleTextInput} required/><br />
//           <label htmlFor="image_URL">Image URL</label>
//           <input type="text" value={input.image_URL} id='image_URL' onChange={handleTextInput}/><br />
//           <label htmlFor="contactInfo">Contant info</label>
//           <input type="text" value={input.contactInfo} id='contactInfo' onChange={handleTextInput}/><br />
//       {/* <button onClick={routeCouchDetail}>Submit</button> */}
//       <Button variant="dark" type="submit" size="lg" onClick={routeCouchDetail}></Button>
//       </form>
//       </Display>
//     </div>
// )
// }
