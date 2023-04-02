import logo from "./logo.svg";
import "./App.css";
//import { PowerBIEmbed } from "powerbi-client-react";

function App() {
  return (
    <div className="App">
      <iframe
        title="Report Section"
        width="1024"
        height="1060"
        src="https://app.powerbi.com/view?r=eyJrIjoiODE2YWZlNmUtNDJkNi00ZDY2LWIxMmItY2I1ZTc2MGQxNTM0IiwidCI6ImZlZTNiOTE2LTAxYzEtNDk4Ny1hNjQ2LWUxOTM0MzJiOWVhYSIsImMiOjl9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}

export default App;
