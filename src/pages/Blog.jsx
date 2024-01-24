import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import BlogFilter from "../components/BlogFilter";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";
  const latest = searchParams.get("latest");

  const startsFrom = latest ? 80 : 1;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="mt-5 mb-5">
      <h1>Blog...</h1>
      <BlogFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />
      <Link to="/blog/new">Add new post</Link>
      <div>
        {posts
          .filter(
            (post) => post.title.includes(postQuery) && post.id >= startsFrom
          )
          .map((post) => {
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
