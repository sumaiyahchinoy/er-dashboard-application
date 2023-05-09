import "./styles.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import "./styles.css";

export function OnBoardingPage() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    console.log(data);
  };

  const handleSubmit = async (e) => {
    console.log("here");
    // e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `token ${token}`,
        },
      };
      var url = "http://localhost:3002/auth/login";
      await axios.post(url, data, config).then((response) => {
        var data = response.data;
        console.log("hello");
        console.log(data.accessToken);
        sessionStorage.setItem("userAccessToken", data.accessToken);
        window.location = "/homePage";
      });
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error.response);
        alert("Invalid Email and Password");
      }
    }
  };

  return (
    <div className="HomePage-FullScreenContainer">
      <div className="container">
        <form className="form">
          <TextField
            className="textField"
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            onChange={handleChange}
            value={data.email}
            required
          />
          <TextField
            className="textField"
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            onChange={handleChange}
            value={data.password}
            required
          />
          <Button
            className="button"
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
