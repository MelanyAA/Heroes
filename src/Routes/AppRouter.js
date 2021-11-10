import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../login/LoginScreen";

import { DashboarRouter } from "./DashboarRouter";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Login" element={<LoginScreen />} />
          <Route
            path="/"
            element={user.logged ? <DashboarRouter /> : <LoginScreen />}
          />
          <Route path="*" element={<DashboarRouter />} />
        </Routes>
      </div>
    </Router>
  );
};
