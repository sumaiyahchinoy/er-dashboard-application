import LeftNavBar from "../../Components/NavBar";
import "./styles.css";

export function Forecasting() {
  return (
    <>
      <div className="FullScreenContainer">
        <LeftNavBar />
        <div className="ScreenContainer">
          <div className="HeadingContainer"></div>
          <div className="DashboardContainer">
            <iframe
              title="Indus_Dashboard-DESKTOP-DPUSIS3"
              src={process.env.REACT_APP_FORECAST_LINK}
              frameborder="0"
              allowFullScreen="true"
              className="DashboardFrame"
            ></iframe>
          </div>
          <div className="HeadingContainer"></div>
        </div>
      </div>
    </>
  );
}
