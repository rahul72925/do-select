import { render, screen } from "@testing-library/react";
import App from "./App";

test("input testing box testing", () => {
  render(<App />);

  let checkInput = screen.getByRole("textbox");
  let checkInputPlaceholder = screen.getByPlaceholderText("enter you name");

  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("type", "text");
});
