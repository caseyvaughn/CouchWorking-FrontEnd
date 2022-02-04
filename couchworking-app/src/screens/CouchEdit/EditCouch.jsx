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
      const res = await axios.get(`https://couch-working.herokuapp.com/couch-api/couch/${id}`);
      console.log(res)
      setInput(res.data);
    };
    fetchCouch();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = input;
    await axios.put(`https://couch-working.herokuapp.com/couch-api/update/${id}`, fields);
    setInput(default_input);
    navigate('/create');
  };

  const handleTextInput = (event) => {
    const { id, value } = event.target;
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
        <h2>Thank you for updating your CouchWorking place!</h2>
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={input.title} id='title' onChange={handleTextInput} required/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={input.description} id='description' onChange={handleTextInput}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" value={input.location} id='location' onChange={handleTextInput} required/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" value={input.image_URL} id='image_URL' onChange={handleTextInput}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Contact Information</Form.Label>
            <Form.Control type="text" value={input.contactInfo} id='contactInfo' onChange={handleTextInput}/>
          </Form.Group>
          <Button variant="dark" type="submit" onClick={routeCouchDetail}>Edit Couch</Button>
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
