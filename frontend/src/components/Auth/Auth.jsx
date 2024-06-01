// import Login from "./Login";
// import Register from "./Register";
// import "./Auth.css";

// const Auth = () => {
//   return (
//     <section className="account-page">
//       <div className="container">
//         <div className="account-wrapper">
//           <Login />
//           <Register />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Auth;


import React, { useState, useEffect } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ProfilePage from "./ProfilePage"; 
import "./Auth.css";

const Auth = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  const navigate = useNavigate();

  // Kullanıcının kayıtlı olup olmadığını kontrol et
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      // Kullanıcı kayıtlıysa, ana sayfaya yönlendir
   
      navigate("/profile");
    }
  }, [navigate]);

  // Kayıt sayfasına yönlendirme fonksiyonu
  const redirectToRegister = () => {
    setIsRegistered(false);
  };

  return (

    <section className="account-page">
      <div className="container">
        <div className="account-wrapper">
          {!isRegistered && (
            // Eğer kullanıcı kayıtlı değilse kayıt formunu göster
            <Register />
          )}
          {/* Login sayfasını her durumda göster */}
          <Login redirectToRegister={redirectToRegister} />
          
        </div>
      </div>
    </section>
  );
};

export default Auth;

