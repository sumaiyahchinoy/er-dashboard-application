import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import "./styles.css";

export function OnBoardingPage() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      var url = "https://ih-care-node.vercel.app/auth/login";

      await axios.post(url, data, config).then((response) => {
        var data = response.data;
        sessionStorage.setItem("userAccessToken", data.accessToken);
        sessionStorage.setItem("userLoggedIn", true);
        window.location = "/realTimeAnalysis";
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
