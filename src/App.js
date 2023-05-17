import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RealTimeAnalysis } from "./Pages/RealTimeAnalysis";
import { OverallAnalysis } from "./Pages/OverallAnalysis";
import { OnBoardingPage } from "./Pages/OnBoardingPage";
import { Forecasting } from "./Pages/Forecasting";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const userLoggedIn = sessionStorage.getItem("userLoggedIn");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnBoardingPage />} />
          <Route path="/realTimeAnalysis">
            {userLoggedIn && (
              <Route
                index
                element={
                  <ProtectedRoute>
                    <RealTimeAnalysis />
                  </ProtectedRoute>
                }
              />
            )}
            {!userLoggedIn && <Route index element={" 404 NOT FOUND"} />}
          </Route>
          <Route path="/overallAnalysis">
            {userLoggedIn && (
              <Route
                index
                element={
                  <ProtectedRoute>
                    <OverallAnalysis />
                  </ProtectedRoute>
                }
              />
            )}
            {!userLoggedIn && <Route index element={" 404 NOT FOUND"} />}
          </Route>
          <Route path="/forecasting">
            {userLoggedIn && (
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Forecasting />
                  </ProtectedRoute>
                }
              />
            )}
            {!userLoggedIn && <Route index element={" 404 NOT FOUND"} />}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
