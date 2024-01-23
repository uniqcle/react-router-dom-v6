import { useParams } from "react-router-dom";

const Editpost = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Edit Post {id}</h1>
    </>
  );
};

export default Editpost;
