// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { useContext } from "react";
// import { CartContext } from "../../context/CartProvider";
// import { Link } from "react-router-dom";
// const CartItem = ({ cartItem }) => {
//   const { removeFromCart } = useContext(CartContext);

//   const [recommendations, setRecommendations] = useState([]);

//   useEffect(() => {
//     // API'ye istek göndererek önerileri al
//     fetch(`http://127.0.0.1:3000/get_recommendations/${cartItem._id}`)
//       .then((response) => response.json())
//       .then((data) => setRecommendations(data.recommendations));
//   }, [cartItem._id]);

//   return (
//     <>
//       <tr className="cart-item">
//         <td></td>
//         <td className="cart-image">
//           <img src={cartItem.img[0]} alt="" />
//           <i
//             className="bi bi-x delete-cart"
//             onClick={() => removeFromCart(cartItem._id)}
//           ></i>
//         </td>
//         <td>{cartItem.name}</td>
//         <td>{cartItem.price.toFixed(2)}₺</td>
//         <td className="product-quantity">{cartItem.quantity}</td>
//         <td className="product-subtotal">
//           {(cartItem.price * cartItem.quantity).toFixed(2)}₺
//         </td>
//       </tr>

//       <ul>
//         {recommendations.map((recommendation, index) => (
//           <li key={index}>{recommendation}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default CartItem;

// CartItem.propTypes = {
//   cartItem: PropTypes.object,
// };

// CartItem.js;







// import React, { useEffect, useState } from "react";
// import "./CartItem.css";
// import PropTypes from "prop-types";
// import { useContext } from "react";
// import { CartContext } from "../../context/CartProvider";
// import { Link } from "react-router-dom";
// const CartItem = ({ cartItem }) => {
//   const { removeFromCart } = useContext(CartContext);
//   const [recommendations, setRecommendations] = useState([]);
//   const [productInfos, setProductInfos] = useState([]);
//   const apiUrl = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     // API'ye istek göndererek önerileri al
//     fetch(`http://127.0.0.1:3000/get_recommendations/${cartItem._id}`)
//       .then((response) => response.json())
//       .then((data) => setRecommendations(data.recommendations));
//   }, [cartItem._id]);

//   const fetchProductInfo = async (productId) => {
//     try {
//       const response = await fetch(`${apiUrl}/api/products/${productId}`);
      
//       if (!response.ok) {
//         throw new Error("Verileri getirme hatası");
//       }

//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.log(`Ürün ID ${productId} için veri hatası:`, error);
//       return null;
//     }
//   };

//   useEffect(() => {
//     const fetchProductInfos = async () => {
//       const productInfoArray = await Promise.all(recommendations.map((productId) => fetchProductInfo(productId)));
//       setProductInfos(productInfoArray.filter(productInfo => productInfo !== null));
//     };

//     if (recommendations.length > 0) {
//       fetchProductInfos();
//     }
//   }, [recommendations]);

//   return (
//     <>
//       <tr className="cart-item">
//         <td></td>
//         <td className="cart-image">
//           <img src={cartItem.img[0]} alt="" />
//           <i
//             className="bi bi-x delete-cart"
//             onClick={() => removeFromCart(cartItem._id)}
//           ></i>
//         </td>
//         <td>{cartItem.name}</td>
//         <td>{cartItem.price.toFixed(2)}₺</td>
//         <td className="product-quantity">{cartItem.quantity}</td>
//         <td className="product-subtotal">
//           {(cartItem.price * cartItem.quantity).toFixed(2)}₺
//         </td>
//       </tr>

//       <ul>
//         {productInfos.map((productInfo, index) => (
//           <li  key={index}>
//             {/* Önerilen ürün bilgilerini burada kullanabilirsiniz */}
//             <Link to={`/product/${productInfo._id}`}>{productInfo.name}
//             <img src={productInfo.img[0]} alt={productInfo.name} />
//             </Link>
//             {/* ... Diğer önerilen ürün bilgileri burada ... */}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default CartItem;

// CartItem.propTypes = {
//   cartItem: PropTypes.object,
// };





// CartItem.jsx









// CartItem.jsx


import React, { useEffect, useState } from "react";
import "./CartItem.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";

const CartItem = ({ cartItem }) => {
  const { removeFromCart } = useContext(CartContext);
  const [recommendations, setRecommendations] = useState([]);
  const [productInfos, setProductInfos] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // API'ye istek göndererek önerileri al
    fetch(`http://127.0.0.1:3000/get_recommendations/${cartItem._id}`)
      .then((response) => response.json())
      .then((data) => setRecommendations(data.recommendations));
  }, [cartItem._id]);

  const fetchProductInfo = async (productId) => {
    try {
      const response = await fetch(`${apiUrl}/api/products/${productId}`);
      
      if (!response.ok) {
        throw new Error("Verileri getirme hatası");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(`Ürün ID ${productId} için veri hatası:`, error);
      return null;
    }
  };

  useEffect(() => {
    const fetchProductInfos = async () => {
      const productInfoArray = await Promise.all(recommendations.map((productId) => fetchProductInfo(productId)));
      setProductInfos(productInfoArray.filter(productInfo => productInfo !== null));
    };

    if (recommendations.length > 0) {
      fetchProductInfos();
    }
  }, [recommendations]);

  return (
    <>
      <tr className="cart-item">
        <td className="a"></td>
        <td className="cart-image">
          <img src={cartItem.img[0]} alt="" />
          <i
            className="bi bi-x delete-cart"
            onClick={() => removeFromCart(cartItem._id)}
          ></i>
        </td>
        <td>{cartItem.name}</td>
        <td>{cartItem.price.toFixed(2)}₺</td>
        <td className="product-quantity">{cartItem.quantity}</td>
        <td className="product-subtotal">
          {(cartItem.price * cartItem.quantity).toFixed(2)}₺
        </td>
      </tr>
      <br />
      
<div>Birlite Alınan Ürünler</div>
      <ul className="cartRecommendation">
        {productInfos.map((productInfo, index) => (
          <li className="cartLi" key={index}>
   
            <Link to={`/product/${productInfo._id}`}>
              <img className="cartLiImg" src={productInfo.img[0]} alt={productInfo.name} />
              <span className="cartLia">{productInfo.name}</span>
            </Link>
            
          </li>
        ))}
      </ul>
    
    </>
    
  );
 
};

CartItem.propTypes = {
  cartItem: PropTypes.object,
};

export default CartItem;



