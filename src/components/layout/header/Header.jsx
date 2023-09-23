import React, { useRef } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../common/input/Input";
import useCartData from "../../../hooks/useCartData";
import usePlaceholder from "../../../hooks/usePlaceHolder";
import { useKeyboardShortcut } from "../../../utils/helper/layout/searchHelpers";

const Header = () => {
  const navigate = useNavigate();
  const hotKeysInputRef = useRef();
  const placeholder = usePlaceholder();
  const cartProducts = useCartData();
  const navigateToSearch = () => {
    navigate("/search");
  };
  useKeyboardShortcut("ctrl+k", () => {
    hotKeysInputRef.current.focus();
  });
  return (
    <section className="myicon">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid ms-5">
          <Link className="navbar-brand" to="/">
            <img
              src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-shop-icon-135610500.jpg"
              alt=""
              width="80px"
              height="75px"
            />
          </Link>

          <div
            className="d-flex flex-grow-1 justify-content-center"
            role="search"
          >
            <Input
              className="form-control me-2 searchbar"
              type="text"
              ref={hotKeysInputRef}
              onChange={navigateToSearch}
              onClick={navigateToSearch}
              placeholder={placeholder}
              aria-label="Search"
              style={{ maxWidth: "850px" }}
            />

            <kbd className="searchbar btn btn-dark">ctrl + K</kbd>
          </div>

          <div className="ms-auto ">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link className="nav-link me-3" to="/add-to-cart">
                  ➕Cart{cartProducts.length}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" aria-current="page" to="#">
                  👤Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" aria-current="page" to="#">
                  👤Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
