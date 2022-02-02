import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const default_User = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const baseURL = "https://couch-working.herokuapp.com/";

const UserSignUp = () => {
  const [newUser, setNewUser] = useState(default_User);
  const navigate = useNavigate();

  handleTextInput = (e) => {
    const {id, value} = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.prventDefault();
    await axios.post(baseURL, newUser);
  };

  return (
    <div>
      <form>
        <input
          id="username"
          value={newUser.username}
          placeholder="Username"
        ></input>
        <input
          id="firstName"
          value={newUser.firstName}
          placeholder="First Name"
        ></input>
        <input
          id="lastName"
          value={newUser.lastName}
          placeholder="Last Name"
        ></input>
        <input id="email" value={newUser.email} placeholder="Email"></input>
        <input
          id="password"
          value={newUser.password}
          placeholder="Password"
        ></input>
      </form>
    </div>
  );
};

export default UserSignUp;
