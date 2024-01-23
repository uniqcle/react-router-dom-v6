import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [post]);

  return (
    <div className="mt-5 mb-5">
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <div>
            <Link to={`/blog/${id}/edit`}>Edit this post</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default SinglePage;
