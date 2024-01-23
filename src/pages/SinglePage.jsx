import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const goBack = () => navigate(-1);
  const goHome = () => navigate("/", { replace: true });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
    // goHome if navigate to home
  }, [post]);

  return (
    <div className="mt-5 mb-5">
      <button onClick={goBack}>Go Back</button>
      {/* bad approach. Link - better */}
      {/* <button onClick={goHome}>Go Home</button> */}
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
