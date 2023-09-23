import React from "react";
import "./assets/style/global.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Navbar from "./components/layout/navbar/Navbar";
import routerPath from "./routes/createRoutePath";
import Toaster from "./components/notifications/Toaster";
import { pagesWithOutNavbarAndHeader } from "./utils/constants/pages";

const App = () => {
  const location = useLocation();
  const shouldHideNavbarAndHeader = pagesWithOutNavbarAndHeader.includes(
    location.pathname
  );
  return (
    <>
      <Toaster />

      {!shouldHideNavbarAndHeader && <Header />}
      {!shouldHideNavbarAndHeader && <Navbar />}

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
