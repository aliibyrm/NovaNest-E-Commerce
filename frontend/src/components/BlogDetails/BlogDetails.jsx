import React from 'react';
import { useParams } from 'react-router-dom';
import "./BlogDetails.css";

const BlogDetails = ({ blogData }) => {
  // useParams hook'u ile URL'den gelen parametreyi alalım
  const { id } = useParams();

  // id'ye göre doğru blog yazısını bulalım
  const selectedBlog = blogData.find(blog => blog.id.toString() === id);

  if (!selectedBlog) {
    return <p>Blog bulunamadı</p>;
  }

  return (
    <section className="single-blog">
      <div className="container">
        <article>
          <figure>
            <img src={selectedBlog.image} alt="" />
          </figure>
          <div className="blog-wrapper">
            <h1 className="blog-title">{selectedBlog.title}</h1>
            <div className="blog-content">
              {selectedBlog.content}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogDetails;
