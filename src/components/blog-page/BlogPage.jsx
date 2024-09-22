import React from 'react';
import './blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const BlogPage = () => {
  return (
    <div className="container">
      <div className="product-comparison">
        <div className="header">
          <h1 className='header-text'>Blog</h1>
        </div>
      </div>
      <div className="blog-container">
        {/* Right Main Content */}
        <div className="posts">
          {/* Example Post */}
          <div className="post">
            <img src="path/to/image1.jpg" alt="Post 1" className="post-image" />
            <div className="post-info">
              <span>Posted by John Doe | Sep 20, 2024</span>
            </div>
            <div className="post-content">
              <p>
                This is the preview of the first blog post. It provides a glimpse
                of what the full article is about...
              </p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>

          {/* Example Post 2 */}
          <div className="post">
            <img src="path/to/image2.jpg" alt="Post 2" className="post-image" />
            <div className="post-info">
              <span>Posted by Jane Smith | Sep 18, 2024</span>
            </div>
            <div className="post-content">
              <p>
                Another interesting topic covered in this article, providing
                insights on various subjects...
              </p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>

          {/* Add more posts as needed */}
        </div>

        {/* Left Sidebar */}
        <aside className="sidebar">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <span className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
          <div className="categories">
            <h3>Categories</h3>
            <ul>
              <li>Technology (5)</li>
              <li>Business (3)</li>
              <li>Lifestyle (8)</li>
              <li>Health (4)</li>
              <li>Education (2)</li>
            </ul>
          </div>
          {/* Recent Posts Section */}
          <div className="recent-posts">
            <h3>Recent Posts</h3>
            <div className="recent-post">
              <img src="path/to/recent1.jpg" alt="Recent Post 1" className="recent-post-image" />
              <div className="recent-post-info">
                <p>This is a short description of the recent post.</p>
                <span>Sep 21, 2024</span>
              </div>
            </div>
            <div className="recent-post">
              <img src="path/to/recent2.jpg" alt="Recent Post 2" className="recent-post-image" />
              <div className="recent-post-info">
                <p>This is a short description of another recent post.</p>
                <span>Sep 19, 2024</span>
              </div>
            </div>
            {/* Add more recent posts as needed */}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;