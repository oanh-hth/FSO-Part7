import { useState } from "react";

const BlogForm = ({ createBlog }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const addBlog = e => {
    e.preventDefault();
    createBlog({ title, author, url });
    setTitle("");
    setAuthor("");
    setUrl("");
  };

  return (
    <form onSubmit={addBlog}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          data-testid="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="title"
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          data-testid="author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder="author"
        />
      </div>
      <div>
        <label htmlFor="url">Url</label>
        <input
          id="url"
          data-testid="url"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="url"
        />
      </div>

      <button type="submit">create</button>
    </form>
  );
};

export default BlogForm;
