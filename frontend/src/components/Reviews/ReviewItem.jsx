import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const ReviewItem = ({ reviewItem }) => {
  const { review, user  } = reviewItem;
  const { text, createdAt, rating } = review;
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(createdAt).toLocaleDateString(
    "tr-TR",
    options
  );
  const [sentimentResult, setSentimentResult] = useState(null);

  console.log(rating);


  useEffect(() => {
    const analyzeSentiment = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:4000/analyze_sentiment?text=${encodeURIComponent(
            text
          )}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              text: text,
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          setSentimentResult(data.category);
        } else {
          console.error("HTTP error:", response.status);
        }
      } catch (error) {
        console.error("Error during sentiment analysis:", error.message);
      }
    };

    analyzeSentiment();
  }, [text]);


  return (
    <li className="comment-item">
      <div className="comment-avatar">
        <img src={user.avatar} alt="" width={60} />
      </div>
      <div className="comment-text">
        <ul className="comment-star">
          {Array.from({ length: rating }, (_, index) => {
            return (
              <li key={index}>
                <i className="bi bi-star-fill"></i>
              </li>
            );
          })}
        </ul>
        <div className="comment-meta">
          <strong> {user.username}</strong>
          <span> - </span>
          <time>{formattedDate}</time>
        </div>
        <div className="comment-description">
          <p>{text}</p>
          <p>Duygu Analizi Sonucu: {sentimentResult}</p>
          
         
        </div>
      </div>
    </li>
  );
};

export default ReviewItem;

ReviewItem.propTypes = {
  reviewItem: PropTypes.object,


};