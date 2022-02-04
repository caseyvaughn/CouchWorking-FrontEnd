import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./UserSignIn.css";

const default_User = {
  username: "",
  password: "",
};

const baseURL = "https://couch-working.herokuapp.com/";

const UserSignIn = () => {
  const [user, setUser] = useState(default_User);
  const navigate = useNavigate();

  const handleTextInput = (e) => {
    const {id, value} = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: `${baseURL}user-api/sign-in`,
      data: user,
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };
  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <fieldset className="fieldset1">
          <legend className="legend1">Sign In</legend>
          <input
            id="username"
            value={user.username}
            placeholder="username"
            onChange={(e) => {
              handleTextInput(e);
            }}
          ></input>
          <br />
          <input
            id="password"
            value={user.password}
            placeholder="password"
            onChange={(e) => {
              handleTextInput(e);
            }}
          ></input>
          <br />
          <button>Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default UserSignIn;
