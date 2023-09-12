import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
    <div className="blog-card">
        <div className="card-image">
           <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
            </div> 
            <div className="blog-content">
                <p className="date">1 Dec 2022</p>
                <h4 className="title"> A Beautiful Sunday Morning Renaissance</h4>
                <p className="desc">
                Himalaya brings to you a range of accredited eye wear 
                that must be used by labour that handles such threat to eyes 
                while working.
                </p>
                <Link to="/" className="button">
                    Read More
                </Link>
            </div>
            </div>
    </div>
  );
};

export default BlogCard;