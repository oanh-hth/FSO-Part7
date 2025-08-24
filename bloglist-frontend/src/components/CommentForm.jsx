import { useState } from "react";
const CommentForm = ({ blog, onComment }) => {
  console.log(blog);
  const [comment, setComment] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
    onComment({ id: blog.id, comment: { content: comment } });
    setComment("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex align-items-center w-50">
        <input
          type="text"
          className="form-control me-3"
          name="comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <button className="btn  btn-outline-primary">add</button>
      </div>
    </form>
  );
};

export default CommentForm;
