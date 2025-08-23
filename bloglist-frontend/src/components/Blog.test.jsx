import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Blog from "./Blog";

test("renders the blog's title and author, but does not render its URL or number of likes by default.", () => {
  const blog = {
    id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
  };

  render(<Blog blog={blog} />);

  const div = screen.getByText("7 likes");

  expect(div).not.toBeVisible();
});

test("clicking the button shows the blog's URL and number of likes", async () => {
  const blog = {
    id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
  };

  render(<Blog blog={blog} />);

  const user = userEvent.setup();
  const button = screen.getByText("view");
  await user.click(button);

  const div = screen.getByText("7 likes");
  expect(div).toBeVisible();
});

test("clicking the like button twice calls event handler twice", async () => {
  const blog = {
    id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
  };

  const mockHandler = vi.fn();

  render(<Blog blog={blog} onLike={mockHandler} />); // render the component

  const user = userEvent.setup();
  const button = screen.getByText("like");
  await user.click(button);
  await user.click(button);
  expect(mockHandler.mock.calls).toHaveLength(2);
});
