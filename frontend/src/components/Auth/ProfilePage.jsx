import React, { useEffect, useState } from 'react';
import "./ProfilePage.css";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    //localStorage'dan kullanıcı bilgilerini al
    const user = localStorage.getItem("user");
   
   
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserData(parsedUser);
    }
  }, []);

  return (
    <div>
      {userData ? (
        <>
          <h2>Hoşgeldin, {userData.username}!</h2>
          <img
            src={userData.avatar}
            alt="User Avatar"
            style={{ width: '150px', height: '150px' }} // Set the width and height here
          />

          <p>Email: {userData.email}</p>
  
        </>
      ) : (
        <p>User data not found.</p>
      )}
    </div>

  );
};

export default ProfilePage;






// // //Sİpariş geçmişi getirme

// // import React, { useEffect, useState } from 'react';
// // import { Spin, Table, message } from 'antd';

// // const ProfilePage = () => {
// //   const [userData, setUserData] = useState(null);
// //   const [userOrders, setUserOrders] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const MY_STRIPE_SECRET_KEY = import.meta.env.VITE_API_STRIPE_SECRET_KEY;

// //   useEffect(() => {
// //     // localStorage'dan kullanıcı bilgilerini al
// //     const user = localStorage.getItem('user');
   
// //     if (user) {
// //       const parsedUser = JSON.parse(user);
// //       setUserData(parsedUser);

// //       // Kullanıcının siparişlerini çek
// //       fetchUserOrders(parsedUser.email);
// //         fetchUserOrders(parsedUser.id);
// //     }
// //   }, []);

// //   const fetchUserOrders = async (email) => {
// //     setLoading(true);
   
// //     try {
// //       // Kullanıcının email adresine göre Stripe'dan siparişleri çek
// //       const response = await fetch(`https://api.stripe.com/v1/payment_intents?customer=${email}`, {
// //         method: 'GET',
// //         headers: {
// //             Authorization: `Bearer ${MY_STRIPE_SECRET_KEY}`,
// //         },
// //       });

// //       if (response.ok) {
// //         const { data } = await response.json();
// //         setUserOrders(data);
// //       } else {
// //         message.error('Siparişleri getirme başarısız.');
// //       }
// //     } catch (error) {
// //       console.error('Sipariş hatası:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const columns = [
// //     {
// //       title: 'Sipariş Fiyatı',
// //       dataIndex: 'amount',
// //       render: (record) => <b>{(record / 100).toFixed(2)} ₺</b>,
// //     },
// //     // Diğer sipariş bilgilerini burada ekleyebilirsiniz
// //   ];

// //   return (
// //     <div>
// //       {userData ? (
// //         <>
// //           <h2>Hoşgeldin, {userData.username}!</h2>
// //           <p>Email: {userData.email}</p>

// //           <Spin spinning={loading}>
// //             <Table
// //               dataSource={userOrders}
// //               columns={columns}
// //               rowKey={(record) => record.id}
// //               loading={loading}
// //             />
// //           </Spin>
// //         </>
// //       ) : (
// //         <p>User data not found.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default ProfilePage;
