import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/xyz/i);
  expect(linkElement).toBeInTheDocument();
});

test("should first", () => {
  const { debug,container,getByText } = render(<App />);
  // const element  = screen.debug()
  debug()
  expect(getByText("xyz")).toBeInTheDocument("xyz");
  
});
