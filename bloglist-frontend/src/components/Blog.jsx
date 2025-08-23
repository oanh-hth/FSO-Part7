import CommentForm from "./CommentForm";

const Blog = ({ blog, onLike, onDelete, user, onComment }) => {
  if (!blog) return null;
  return (
    <div className="blog">
      <h4>
        <span className="title">{blog.title}</span> <span>{blog.author}</span>
      </h4>
      <a href={blog.url}>{blog.url}</a>
      <p>
        <span className="likes">{blog.likes} likes</span>
        <button className="like" onClick={() => onLike(blog)}>
          like
        </button>
      </p>
      <p>added by {blog.user?.username}</p>
      {user === blog.user?.username && (
        <button onClick={() => onDelete(blog)}>delete</button>
      )}
      <h4>Comments</h4>
      <CommentForm onComment={onComment} blog={blog} />
      <ul>
        {blog.comments.map(comment => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
