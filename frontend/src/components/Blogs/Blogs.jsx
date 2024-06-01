import React from 'react';
import BlogItem from './BlogItem';
import "./Blogs.css";

const Blogs = () => {
  // Örnek blog verileri
  const blogData = [
    { id: 1, title: 'Apple iOS 17.3 yayınlandı! İşte tüm yenilikler', date: '22 Ocak 2024', comments: 0, image: 'https://ares.shiftdelete.net/2024/01/ios-17-3.jpg' },
    { id: 2, title: 'Samsung Galaxy S24 Plus ön inceleme!', date: '17 Ocak 2024', comments: 0, image: 'https://ares.shiftdelete.net/2024/01/Samsung-Galaxy-S24-Plus-on-inceleme.jpg' },
    { id: 3, title: 'iPhone 15 Pro Max ile iPhone 14 Pro Max karşı karşıya!', date: '1 Ocak 2024', comments: 0, image: 'https://ares.shiftdelete.net/2023/11/iphone-15-pro-max-ile-iphone-14-pro-max-karsi-karsiya-2.jpg' },
  ];

  return (
    <section className="blogs">
      <div className="container">
        <div className="section-title">
          <h2>Blog Yazılarımız</h2>
        </div>
        <ul className="blog-list">
          {blogData.map(blog => (
            <BlogItem key={blog.id} data={blog} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blogs;
