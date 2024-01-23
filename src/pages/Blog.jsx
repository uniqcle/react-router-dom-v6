import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  console.log(useLocation());

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="mt-5 mb-5">
      <h1>Blog...</h1>
      <Link to="/blog/new">Add new post</Link>
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
