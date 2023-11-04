import React from "react";
import "./assets/style/global.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Navbar from "./components/layout/navbar/Navbar";
import routerPath from "./routes/createRoutePath";
import Toaster from "./components/notifications/Toaster";
import { validRoutes } from "./utils/constants/pages";

const App = () => {
  const location = useLocation();
  const isCurrnetRouteValid = validRoutes.includes(location.pathname);
  return (
    <>
      <Toaster />

      {isCurrnetRouteValid && <Header />}
      {isCurrnetRouteValid && <Navbar />}

      <Routes>
        {routerPath.map((route, index) => {
          return (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              element={route.element}
            />
          );
        })}
      </Routes>
    </>
  );
};

export default App;
