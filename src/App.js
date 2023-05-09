import LeftNavBar from "./Components/NavBar";
import DashboardItem from "./Components/DashboardItem";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { OnBoardingPage } from "./Pages/OnBoardingPage";

function App() {
  return (
    <>
      {/* <div className="FullScreenContainer">
        <LeftNavBar />
        <div className="ScreenContainer">
          <div className="HeadingContainer">
            INDUS HOSPITAL EMERGENCY DASHBOARD
          </div>
          <div className="DashboardContainer">
            <iframe
              title="Report Section"
              src={process.env.REACT_APP_REPORT_LINK}
              frameborder="0"
              allowFullScreen="false"
              className="DashboardFrame"
            ></iframe>
          </div>
          <div className="BottomContainer"></div>
        </div>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnBoardingPage />} />
          <Route path="/homePage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
