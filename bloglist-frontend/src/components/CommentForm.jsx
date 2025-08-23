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
      <input
        type="text"
        name="comment"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button>add comment</button>
    </form>
  );
};

export default CommentForm;
