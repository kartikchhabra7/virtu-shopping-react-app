import React from "react";
import "./assets/style/global.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Navbar from "./components/layout/navbar/Navbar";
import routerPath from "./routes/createRoutePath";
import Toaster from "./components/notifications/Toaster";
import { validRoutes } from "./utils/constants/pages";
import useModalStorage from "./components/notifications/useModalStorage";
import useAuthentication from "./hooks/useAuthentication";

const App = () => {
  const {isAuthenticated}=useAuthentication()
  const location = useLocation();
  const isCurrentRouteValid = validRoutes.includes(location.pathname);
  function Userlogin(){
    return useModalStorage()
  }
  const renderUserLogin = !isAuthenticated && <Userlogin />;
  return (
    <>
    {renderUserLogin}
      <Toaster />

      {isCurrentRouteValid && <Header />}
      {isCurrentRouteValid && <Navbar />}

      <Routes>
        {routerPath.map((route, index) => (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </>
  );
};

export default App;
