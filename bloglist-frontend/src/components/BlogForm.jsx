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
    <form onSubmit={addBlog} className="w-50">
      <div className="mb-3">
        <label className="form-label" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          data-testid="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="title"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="author">
          Author
        </label>
        <input
          id="author"
          className="form-control"
          data-testid="author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder="author"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="url">
          Url
        </label>
        <input
          id="url"
          className="form-control"
          data-testid="url"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="url"
        />
      </div>

      <button className="btn btn-primary" type="submit">
        create
      </button>
    </form>
  );
};

export default BlogForm;
