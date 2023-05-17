import LeftNavBar from "../../Components/NavBar";
import "./styles.css";
import { MyResponsiveLine } from "./lineGraph";

export function Forecasting() {
  return (
    <>
      <div className="FullScreenContainer">
        <LeftNavBar />
        <div className="ScreenContainer">
          <div className="HeadingContainer"></div>
          <div className="DashboardContainer">
            {/* <iframe
              title="Indus_Dashboard-DESKTOP-DPUSIS3"
              src={process.env.REACT_APP_REPORT_LINK}
              frameborder="0"
              allowFullScreen="true"
              className="DashboardFrame"
            ></iframe> */}
            <h1>Hello</h1>
            <div className="DashboardFrame">
              <MyResponsiveLine />
            </div>
          </div>
          <div className="HeadingContainer"></div>
        </div>
      </div>
    </>
  );
}
