import "./styles.css";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles.css";

export function OnBoardingPage() {
  return (
    <div className="HomePage-FullScreenContainer">
      <div className="container">
        <form className="form">
          <TextField
            className="textField"
            label="Email"
            variant="outlined"
            type="email"
            required
          />
          <TextField
            className="textField"
            label="Password"
            variant="outlined"
            type="password"
            required
          />
          <Button
            className="button"
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
