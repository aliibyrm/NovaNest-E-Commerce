import React from 'react';
import { Link } from 'react-router-dom';
import "./BlogItem.css";

const BlogItem = ({ data }) => {
  return (
    <li className="blog-item">
      <Link to={`/blog/${data.id}`} className="blog-image">
        <img src={data.image} alt="" />
      </Link>
      <div className="blog-info">
        <div className="blog-info-top">
          <span>{data.date}</span>-<span>{data.comments} Comments</span>
        </div>
        <div className="blog-info-center">
          <Link to={`/blog/${data.id}`}>{data.title}</Link>
        </div>
        <div className="blog-info-bottom">
          <Link to={`/blog/${data.id}`}>Read More</Link>
        </div>
      </div>
    </li>
  );
};

export default BlogItem;

