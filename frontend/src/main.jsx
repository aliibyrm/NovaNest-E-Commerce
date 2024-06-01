import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Layout } from "./layouts/Layout";
import CartProvider from "./context/CartProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./components/ScrollToTop";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   <ScrollToTop />
  <CartProvider>
<Layout>
      <App />
      </Layout>
  </CartProvider>
</BrowserRouter>
);
