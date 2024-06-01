import React from "react";
import Policy from "../Policy/Policy";
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
     <Policy/>
      <footer className="footer">
        <div className="subscribe-row">
          <div className="container">
            <div className="footer-row-wrapper">
              <div className="footer-subscribe-wrapper">
                <div className="footer-subscribe">
                  <div className="footer-subscribe-top">
                    <h3 className="subscribe-title">
                    Yeni ürünler, indirimler ve daha fazlası hakkında bilgi almak için e-postanızı yazın,
                    </h3>
                    <p className="subscribe-desc">
                      50 doların üzerinde ilk siparişinizde 10$ değerinde bir kuponu size e-postayla göndereceğiz
                    </p>
                  </div>
                  <div className="footer-subscribe-bottom">
                    <form>
                      <input
                        type="text"
                        placeholder="Email adresinizi yazınız."
                      />
                      <button className="btn">Abone Ol</button>
                    </form>
                    <p className="privacy-text">
                      By subscribing you agree to our{" "}
                      <a href="#">
                        Terms & Conditions and Privacy & Cookies Policy.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer-contact-wrapper">
                <div className="footer-contact-top">
                  <h3 className="contact-title">
                    Yardıma mı ihtiyacınız var ? <br />
                    (+90) 123 456 78 90
                  </h3>
                  <p className="contact-desc">
                    Çalışma Saatlerimiz 9.00 - 17.00
                  </p>
                </div>
                <div className="footer-contact-bottom">
                  <div className="download-app">
                    <a href="#">
                    <img src="/img/footer/app-store.png" alt="" />
                    </a>
                    <a href="#">
                    <img src="/img/footer/google-play.png" alt="" />
                    </a>
                  </div>
                  <p className="privacy-text">
                    <strong>Shopping App:</strong> Try our View in Your Room
                    feature, manage registries and save payment info.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widgets-row">
          <div className="container">
            <div className="footer-widgets">
              <div className="brand-info">
                <div className="footer-logo">
                  <a href="index.html" className="logo">
                    NovaNest
                  </a>
                </div>
                <div className="footer-desc">
                  <p>
                    {" "}
                    Onlarca Ürün, Bol Çeşit Uygun Fiyatlarla NovaNest'te !
                  </p>
                </div>
                <div className="footer-contact">
                  <p>
                    <a href="tel:555 555 55 55">(+800) 1234 5678 90</a> –{" "}
                    <a href="mailto:info@example.com">info@novanest.com</a>
                  </p>
                </div>
              </div>
              <div className="widget-nav-menu">
                <h4>Bilgiler</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Hakkımızda</a>
                  </li>
                  <li>
                    <a href="#">Gizlilik Politikası</a>
                  </li>
                  <li>
                    <a href="#">İade Politikası</a>
                  </li>
                  <li>
                    <a href="#">Kargo Politikası</a>
                  </li>
                 
                </ul>
              </div>
              <div className="widget-nav-menu">
                <h4>Hesap</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                  <li>  
                    <a href="#">Siparişlerim</a>
                  </li>
                  <li>
                    <a href="#">Favoriler</a>
                  </li>
                  <li>
                    <a href="#">Hesap Detayları</a>
                  </li>
                  <li>
                    <a href="#">Sipariş Takibi</a>
                  </li>
                </ul>
              </div>
              <div className="widget-nav-menu">
                <h4>Alışveriş</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">İş Birlikleri</a>
                  </li>
                  <li>
                    <a href="#">En İyi Satıcılar</a>
                  </li>
                  <li>
                    <a href="#">İndirimler</a>
                  </li>
                  <li>
                    <a href="#">Yeni Çıkan Ürünler</a>
                  </li>
                  <li>
                    <a href="#">Satıştaki Ürünler</a>
                  </li>
                </ul>
              </div>
              <div className="widget-nav-menu">
                <h4>Kategoriler</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Telefon</a>
                  </li>
                  <li>
                    <a href="#">Akıllı Saat</a>
                  </li>
                  <li>
                    <a href="#">Bilgisayar</a>
                  </li>
                  <li>
                    <a href="#">Televizyon</a>
                  </li>
                  <li>
                    <a href="#">Aksesuarlar</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-row">
          <div className="container">
            <div className="footer-copyright">
              <div className="site-copyright">
                <p>
                  Copyright 2022 © E-Commerce Theme. 
                </p>
              </div>
              <a href="#">
              <img src="/img/footer/cards.png" alt="" />
              </a>
              <div className="footer-menu">
                <ul className="footer-menu-list">
                  <li className="list-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Terms and Conditions</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Returns Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;