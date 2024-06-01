import { useContext } from "react";
import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

import Proptypes from "prop-types";
import { CartContext } from "../../../context/CartProvider";

const user = localStorage.getItem("user");
const Header = ({ setIsSearchShow }) => {
  const { cartItems } = useContext(CartContext);
  const { pathname } = useLocation();

  return (
    <>
      <header>
        <div className="global-notification">
          <div className="container">
            <p>
              Çılgın Teknoloji Fırsatı ! Teknoloji5 Kupon Koduyla Her Ürüne %5 İndirim
              <a href="/shop"> Alışverişe Başla</a>
            </p>
          </div>
        </div>
        <div className="header-row">
          <div className="container">
            <div className="header-wrapper">
              <div className="header-mobile">
                <i className="bi bi-list" id="btn-menu"></i>
              </div>
              <div className="header-left">
                <Link to={"/"} className="logo">
                  NovaNest
                </Link>
              </div>
              <div className="header-center" id="sidebar">
                <nav className="navigation">
                  <ul className="menu-list">
                    <li className="menu-list-item">
                      <Link
                        to={"/"}
                        className={`menu-link ${pathname === "/" && "active"}`}
                      >
                        Ana Sayfa
                      </Link>
                    </li>
                    <li className="menu-list-item megamenu-wrapper">
                      <Link
                        to={"/shop"}
                        className={`menu-link ${
                          pathname === "/shop" && "active"
                        }`}
                      >
                        Alışveriş
                      </Link>
                    </li>
                    <li className="menu-list-item">
                      <Link
                        to={"/blog"}
                        className={`menu-link ${
                          pathname === "/blog" && "active"
                        }`}
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="menu-list-item">
                      <Link
                        to={"/contact"}
                        className={`menu-link ${
                          pathname === "/contact" && "active"
                        }`}
                      >
                        İletişim
                      </Link>
                    </li>
                  </ul>
                </nav>
                <i className="bi-x-circle" id="close-sidebar"></i>
              </div>
              <div className="header-right">
                <div className="header-right-links">
                  <Link to={"/auth"} className="header-account">
                    <i className="bi bi-person"></i>
                  </Link>
                  <button
                    className="search-button"
                    onClick={() => setIsSearchShow(true)}
                  >
                    <i className="bi bi-search"></i>
                  </button>
                  {/* <a href="#">
                    <i className="bi bi-heart"></i>
                    </a> */}
                  <div className="header-cart">
                    <Link to={"/cart"} className="header-cart-link">
                      <i className="bi bi-bag"></i>
                      <span className="header-cart-count">
                        {cartItems.length}
                      </span>
                    </Link>
                  </div>
                  {/* Kullanıcı giriş yapmışsa göstermek için */}
                  {/* {user && ( */}
                    <button
                      className="search-button"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Çıkış yapmak istediğinize emin misiniz?"
                          )
                        ) {
                          {
                            localStorage.removeItem("user");
                            window.location.href = "/";
                          }
                        }
                      }}
                    >
                      <i className="bi bi-box-arrow-right"></i>
                    </button>
                  {/* // )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

Header.propTypes = {
  setIsSearchShow: Proptypes.func,
};
