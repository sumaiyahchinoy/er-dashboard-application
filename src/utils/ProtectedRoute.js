import axios from "axios";
import { Navigate, useLocation } from "react-router-dom";

const isTokenValid = async (e) => {
  const token = sessionStorage.getItem("userAccessToken");
  var url = process.env.REACT_APP_NODE_BACKEND + "auth/";
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    return response.data.status;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      sessionStorage.removeItem("userAccessToken");
      sessionStorage.removeItem("userLoggedIn");
      window.location = "/";
      return false;
    }
  }
};

const ProtectedRoute = ({ children }) => {
  let location = useLocation();
  isTokenValid().then((response) => {
    if (!response) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
  });
  return children;
};

export default ProtectedRoute;
