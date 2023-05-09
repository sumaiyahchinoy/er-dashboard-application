import { useEffect, useState } from "react";
import "./styles.css";
import DashboardItem from "../DashboardItem";
import { images } from "../../assets/index";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const LeftNavBar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dashboardData = [
    {
      id: 1,
      title: "Overall Analysis",
      icon: <AnalyticsRoundedIcon sx={{ fontSize: "40px" }} />,
    },
    {
      id: 2,
      title: "Real Time Analysis",
      icon: <i className="fa fa-file"></i>,
      icon: <AutoGraphRoundedIcon sx={{ fontSize: "40px" }} />,
    },
    {
      id: 3,
      title: "Forecasting",
      icon: <TimelineRoundedIcon sx={{ fontSize: "40px" }} />,
    },
  ];

  return (
    <div className="left-nav-bar">
      <ul>
        {screenWidth >= 1350 && (
          <li className="left-nav-bar-logo">
            <img src={images.logo} width="200" height="70"></img>
          </li>
        )}
        {screenWidth < 1350 && (
          <li className="left-nav-bar-logo">
            <img src={images.logoSmall} width="100" height="100"></img>
          </li>
        )}
        {dashboardData.map((item) => (
          <li>
            <DashboardItem key={item.id} icon={item.icon} title={item.title} />
          </li>
        ))}
        <li>
          <DashboardItem
            key="4"
            icon={<LogoutRoundedIcon sx={{ fontSize: "40px" }} />}
            title="Logout"
          />
        </li>
      </ul>
    </div>
  );
};

export default LeftNavBar;
