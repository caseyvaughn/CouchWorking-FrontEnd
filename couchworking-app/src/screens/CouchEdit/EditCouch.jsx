import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import "./EditCouch.css"

const default_input = {
    title: "",
    content: "",
    imgUrl: ""
  }

export default function EditPost() {
    const [input, setInput] = useState(default_input);
    const { id } = useParams();
    const navigate = useNavigate();

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
        const res = await axios.put(`https://kkt-backend.herokuapp.com/blog-api/update/${id}`, fields );
        setInput(default_input);
        navigate("/posts");
      }

  return (
    <div>
        <Nav/>
        <form onSubmit={handleSubmit} id="editForm">
            <label htmlFor="imgUrl">Thumbnail</label>
            <input type="text" value={input.imgUrl} id='imgUrl' onChange={handleTextInput}/>
            <label htmlFor="title">Title</label>
            <input type="text" value={input.title} id='title' onChange={handleTextInput} required/>
            <label htmlFor="content">Content</label>
            <textarea type="text" value={input.content} id='content' onChange={handleTextInput} required/>
            <button>Submit</button>
        </form>
    </div>
    );
}
