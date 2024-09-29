import React from 'react';
import './blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faCalendar, faTag } from '@fortawesome/free-solid-svg-icons';

const BlogPage = () => {
  return (
    <div className="container">
      <div className="product-comparison">
        <div className="header">
          <h1 className='header-text'>Blog</h1>
        </div>
      </div>
      <div className="blog-container">
        <div className="posts">
          <div className="post">
            <img src="https://res.cloudinary.com/dgcvgu7dt/image/upload/v1727048526/u8qo58engpuc4rtqsr04.png" alt="Post 1" className="post-image" />
            <div className="post-info">
              <span><FontAwesomeIcon icon={faUser} /> John Doe</span> | 
              <span><FontAwesomeIcon icon={faCalendar} /> Sep 20, 2024</span> | 
              <span><FontAwesomeIcon icon={faTag} /> Technology</span>
            </div>
            <div className="post-content">
              <p>This is the preview of the first blog post. It provides a glimpse of what the full article is about...</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>

          <div className="post">
            <img src="https://res.cloudinary.com/dgcvgu7dt/image/upload/v1727048527/rpz1mvfu5jradmbqxtr5.png" alt="Post 2" className="post-image" />
            <div className="post-info">
              <span><FontAwesomeIcon icon={faUser} /> Jane Smith</span> | 
              <span><FontAwesomeIcon icon={faCalendar} /> Sep 18, 2024</span> | 
              <span><FontAwesomeIcon icon={faTag} /> Business</span>
            </div>
            <div className="post-content">
              <h4>Going all-in with millennial design</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>

          <div className="post">
            <img src="https://res.cloudinary.com/dgcvgu7dt/image/upload/v1727048526/u8qo58engpuc4rtqsr04.png" alt="Post 3" className="post-image" />
            <div className="post-info">
              <span><FontAwesomeIcon icon={faUser} /> Alex Johnson</span> | 
              <span><FontAwesomeIcon icon={faCalendar} /> Sep 15, 2024</span> | 
              <span><FontAwesomeIcon icon={faTag} /> Lifestyle</span>
            </div>
            <div className="post-content">
              <h4>Exploring new ways of decorating</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>

          <div className="pagination">
            <span>Page:</span>
            <a href="#" className="pagination-link">1</a>
            <a href="#" className="pagination-link">2</a>
            <a href="#" className="pagination-link">3</a>
            <a href="#" className="pagination-link">Next</a>
          </div>
        </div>

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
              <li>
                <span>Technology</span>
                <span>5</span>
              </li>
              <li>
                <span>Business</span>
                <span>3</span>
              </li>
              <li>
                <span>Lifestyle</span>
                <span>8</span>
              </li>
              <li>
                <span>Health</span>
                <span>4</span>
              </li>
              <li>
                <span>Education</span>
                <span>2</span>
              </li>
            </ul>
          </div>
          <div className="recent-posts">
            <h3>Recent Posts</h3>
            <div className="recent-post">
              <img src="https://res.cloudinary.com/dgcvgu7dt/image/upload/v1727049095/ffvqxa9yov5ldpmnzkab.png" alt="Recent Post 1" className="recent-post-image" />
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
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;
