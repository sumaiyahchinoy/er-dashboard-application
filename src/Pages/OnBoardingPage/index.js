import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { images } from "../../assets";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import BloodtypeOutlinedIcon from "@mui/icons-material/BloodtypeOutlined";
import MasksOutlinedIcon from "@mui/icons-material/MasksOutlined";
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import "./styles.css";

export function OnBoardingPage() {
  const [data, setData] = useState({ email: "", password: "" });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    setButtonDisabled(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      var url = process.env.REACT_APP_NODE_BACKEND + "auth/login";

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
      setButtonDisabled(false);
    }
  };

  return (
    <div className="HomePage-FullScreenContainer">
      <div className="Header-Container">
        <div className="Title-Container">Indus Hospital - Care</div>
        <img src={images.logoScaled} width="300" height="105"></img>
      </div>
      <div className="Middle-Container">
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
              disabled={buttonDisabled}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
      <div className="Header-Container">
        <LocalHospitalOutlinedIcon
          sx={{ fontSize: "80px", color: "#eeeeee" }}
        />
        <VaccinesOutlinedIcon sx={{ fontSize: "80px", color: "#eeeeee" }} />
        <BloodtypeOutlinedIcon sx={{ fontSize: "80px", color: "#eeeeee" }} />
        <MasksOutlinedIcon sx={{ fontSize: "80px", color: "#eeeeee" }} />
        <MedicalServicesOutlinedIcon
          sx={{ fontSize: "80px", color: "#eeeeee" }}
        />
        <MonitorHeartOutlinedIcon sx={{ fontSize: "80px", color: "#eeeeee" }} />
      </div>
    </div>
  );
}
