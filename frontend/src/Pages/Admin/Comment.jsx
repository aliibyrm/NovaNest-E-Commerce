// // Yorum analizi yapıyor girilen yorumun
// import React, { useState, useEffect} from 'react';

// function Comment() {
//   const [userInput, setUserInput] = useState('');
//   const [result, setResult] = useState(null);
 
//   const handleButtonClick = async () => {
//     try {
//       const response = await fetch(`http://127.0.0.1:4000/analyze_sentiment?text=${encodeURIComponent(userInput)}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           text: userInput,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         // console.log('Response Data:', data);
//         setResult(data.category);
//       } else {
//         console.error('HTTP error:', response.status);
//       }
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };
 
//   return (
//     <div>
//       <h1>E-Ticaret Yorum Kategorizasyonu</h1>
//       <textarea
//         value={userInput}
//         onChange={(e) => setUserInput(e.target.value)}
//         placeholder="Lütfen bir yorum girin"
//       />
//       <button onClick={handleButtonClick}>Yorumu Sınıflandır</button>
//       {result && <p>Yorumunuz {result} kategorisine aittir.</p>}

     
//     </div>
//   );
// }

// export default Comment;


//Fena değil
  // return (
  //   <div>
    
  //     {comments.length > 0 ? (
  //       <table>
  //         <thead>
  //           <tr>
  //             <th>Ürün Adı</th>
  //             <th>Yorum</th>
  //             <th>Analiz Sonucu</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {comments.map((comment, index) => (
  //             <tr key={index}>
  //               <td>{comment.productName}</td>
  //               <td>{comment.reviewText}</td>
  //               <td>
  //                 {commentResults.length > 0 && commentResults[index] && (
  //                   <p>Yorumunuz {commentResults[index]} kategorisine aittir.</p>
  //                 )}
  //               </td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     ) : (
  //       <p>No comments available.</p>
  //     )}
  //   </div>
  // );


import React, { useEffect, useState } from "react";
import { Table, message } from "antd";

const Comment = ({ productId }) => {
  const [comments, setComments] = useState([]);
  const [commentResults, setCommentResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });

  useEffect(() => {
    const fetchComments = async () => {
      try {

        const response = await fetch(`${apiUrl}/api/products/${productId}/comments`);

        if (response.ok) {
          const data = await response.json();
          setComments(data);
          analyzeComments(data); // Yorumları analiz et
        } else {
          message.error("Yorumları getirme başarısız.");
        }
      } catch (error) {
        console.log("Yorum hatası:", error);
      }
      
    // Ekleyin
    };

    fetchComments();
  }, [apiUrl, productId]);

  const analyzeComments = async (comments) => {
    try {
      const results = await Promise.all(
        comments.map(async (comment) => {
          const response = await fetch(`http://127.0.0.1:4000/analyze_sentiment?text=${encodeURIComponent(comment.reviewText)}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              text: comment.reviewText,
            }),
          });

          if (response.ok) {
            const data = await response.json();
            return data.category;
          } else {
            console.error('HTTP error:', response.status);
            return null;
          }
        })
      );

      setCommentResults(results);
    } catch (error) {
      console.error('Error during comment analysis:', error.message);
    }
  };
  const columns = [
    {
      title: "Ürün Adı",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Yorum",
      dataIndex: "reviewText",
      key: "reviewText",
    },
    {
      title: "Analiz Sonucu",
      dataIndex: "result",
      key: "result",
      render: (text, record, index) => {
        return commentResults.length > 0 && commentResults[index] ? (
          // <p>Yorumunuz {commentResults[index]} kategorisine aittir.</p>
          <p>{commentResults[index]} </p>
        ) : null;
      },
    },
  ];

  const dataSource = comments.map((comment, index) => ({
    key: comment._id,
    productName: comment.productName,
    reviewText: comment.reviewText,
    result: commentResults.length > 0 ? commentResults[index] : null,
  }));

  return (
    // <Table
    //   dataSource={dataSource}
    //   columns={columns}
    //   rowKey={(record) => record.key}
    //   loading={loading}
    // />
    <Table
  dataSource={dataSource}
  columns={columns}
  rowKey={(record) => record.key}
  loading={loading}
  pagination={pagination}
  onChange={(pagination, filters, sorter) => {
    setPagination(pagination);
  }}
/>
  );
};

export default Comment;

