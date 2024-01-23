import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="mt-5 mb-5">
      <h1>Blog...</h1>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              {post.id} <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
