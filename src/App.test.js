import { render, screen } from "@testing-library/react";
import Wrapper from "./Wrapper";

test("Link is enabled, isPreAP is false", () => {
  render(<Wrapper isPreAp={false} />);
  const linkElement = screen.getByTestId("1");
  expect(linkElement).toHaveAttribute("href", "http://www.google.com/");
});

test("Link is enabled, isPreAP is undefined", () => {
  render(<Wrapper isPreAp={undefined} />);
  const linkElement = screen.getByTestId("1");
  expect(linkElement).toHaveAttribute("href", "http://www.google.com/");
});

test("Link is enabled, isPreAP is null", () => {
  render(<Wrapper isPreAp={null} />);
  const linkElement = screen.getByTestId("1");
  expect(linkElement).toHaveAttribute("href", "http://www.google.com/");
});

test("Link is disabled, text italics, isPreAP is true", () => {
  render(<Wrapper isPreAp={true} />);
  const linkElement = screen.getByTestId("2");
  expect(linkElement).toHaveTextContent("PreAPGoogle (Under Maintenance)");
});
