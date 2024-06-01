// import { useState } from "react";
// import { message } from "antd";
// import { useNavigate } from "react-router-dom";
// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`http://localhost:5005/api/auth/register`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         // const { password, ...rest } = data;

//         localStorage.setItem("user", JSON.stringify(data));
//         message.success("Kayıt başarılı.");
//         navigate("/");
//       } else {
//         message.error("Kayıt başarısız.");
//       }
//     } catch (error) {
//       console.log("Giriş hatası:", error);
//     }
//   };

//     return (
//       <div className="account-column">
//         <h2>Register</h2>
//         <form onSubmit={handleRegister}>
//           <div>
//             <label>
//               <span>
//                 Username <span className="required">*</span>
//               </span>
//               <input type="text" onChange={handleInputChange} name="username" />
//             </label>
//           </div>
//           <div>
//             <label>
//               <span>
//                 Email address <span className="required">*</span>
//               </span>
//               <input type="email" onChange={handleInputChange} name="email" />
//             </label>
//           </div>
//           <div>
//             <label>
//               <span>
//                 Password <span className="required">*</span>
//               </span>
//               <input
//               type="password"
//               onChange={handleInputChange}
//               name="password"
//             />
//             </label>
//           </div>
//           <div className="privacy-policy-text remember">
//             <p>
//               Your personal data will be used to support your experience
//               throughout this website, to manage access to your account, and for
//               other purposes described in our <a href="#">privacy policy.</a>
//             </p>
//             <button className="btn btn-sm">Register</button>
//           </div>
//         </form>
//       </div>
//     );
//   };
  
//   export default Register;




// import { useState } from "react";
// import { message } from "antd";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();
//   const apiUrl = import.meta.env.VITE_API_BASE_URL;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
 
//   const handleRegister = async (e) => {
//     e.preventDefault();
   
//     try {
//      const response = await fetch(`${apiUrl}/api/auth/register`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         message.success("Kullanıcı başarıyla kaydedildi."); // Başarılı kayıt durumunda mesaj
//        // navigate('/auth'); // İsteğe bağlı olarak başka bir sayfaya yönlendirme
//          // Başarı durumunda input değerlerini sıfırla
//          setFormData({
//           username: " ",
//           email: " ",
//           password: " ",
//         });

//       } else {
//         message.error("Kayıt işlemi başarısız oldu.");
//       }
//       console.log(response);
//     } catch (error) {
//       console.log("Giriş hatası:", error);
//     }
//   };

//   return (
//     <div className="account-column">
//       <h2>Register</h2>
     
//       <form onSubmit={handleRegister}>
//         <div>
//           <label>
//             <span>
//               Username <span className="required">*</span>
//             </span>
//             <input type="text" onChange={handleInputChange} name="username" required />
//           </label>
//         </div>
//         <div>
//           <label>
//             <span>
//               Email address <span className="required">*</span>
//             </span>
//             <input type="email" onChange={handleInputChange} name="email" required />
//           </label>
//         </div>
//         <div>
//           <label>
//             <span>
//               Password <span className="required">*</span>
//             </span>
//             <input
//               type="password"
//               onChange={handleInputChange}
//               name="password"
//               required
//             />
//           </label>
//         </div>
//         <div className="privacy-policy-text remember">
//           <p>
//             Your personal data will be used to support your experience
//             throughout this website, to manage access to your account, and for
//             other purposes described in our <a href="#">privacy policy.</a>
//           </p>
//           <button className="btn btn-sm">Register</button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default Register;













import { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        message.success("Kullanıcı başarıyla kaydedildi.");


        // Başarı durumunda input değerlerini sıfırla
        setFormData({
          username: "",
          email: "",
          password: "",
        });

        // İsteğe bağlı olarak başka bir sayfaya yönlendirme
        // navigate('/auth');
      } else {
        message.error("Kayıt işlemi başarısız oldu.");
      }

      console.log(response);
    } catch (error) {
      console.log("Giriş hatası:", error);
    }
  };

  return (
    <div className="account-column">
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <div>
          <label>
            <span>
              Username <span className="required">*</span>
            </span>
            <input
              type="text"
              onChange={handleInputChange}
              name="username"
              value={formData.username}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <span>
              Email address <span className="required">*</span>
            </span>
            <input
              type="email"
              onChange={handleInputChange}
              name="email"
              value={formData.email}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <span>
              Password <span className="required">*</span>
            </span>
            <input
              type="password"
              onChange={handleInputChange}
              name="password"
              value={formData.password}
              required
            />
          </label>
        </div>
        <div className="privacy-policy-text remember">
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <a href="#">privacy policy.</a>
          </p>
          <button className="btn btn-sm">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
