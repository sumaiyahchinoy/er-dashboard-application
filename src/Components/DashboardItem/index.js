import { useEffect, useState } from "react";
import "./styles.css"; // Import your CSS styles here

const DashboardItem = ({ icon, title }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="dashboard-item">
      <div className="dashboard-item-icon">{icon}</div>
      {screenWidth >= 1350 && (
        <div className="dashboard-item-content">
          <div className="dashboard-item-title">{title}</div>
        </div>
      )}
    </div>
  );
};

export default DashboardItem;
