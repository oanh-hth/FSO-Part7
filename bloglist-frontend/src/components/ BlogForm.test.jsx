import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BlogForm from "./BlogForm";

test("create new blog calls the event handler it received as props with the right details when a new blog is created", async () => {
  const mockHandler = vi.fn();
  render(<BlogForm createBlog={mockHandler} />);

  const user = userEvent.setup();
  const title = screen.getByPlaceholderText("title");
  const author = screen.getByPlaceholderText("author");
  const url = screen.getByPlaceholderText("url");
  const button = screen.getByText("create");

  await user.type(title, "React patterns");
  await user.type(author, "Michael Chan");
  await user.type(url, "https://reactpatterns.com/");
  await user.click(button);

  expect(mockHandler.mock.calls).toHaveLength(1);
  expect(mockHandler.mock.calls[0][0].title).toBe("React patterns");
  expect(mockHandler.mock.calls[0][0].author).toBe("Michael Chan");
  expect(mockHandler.mock.calls[0][0].url).toBe("https://reactpatterns.com/");
});
