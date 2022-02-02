import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

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

  return (
    <div>
      <h2>Thank you for updating your CouchWorking place!!</h2>
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
