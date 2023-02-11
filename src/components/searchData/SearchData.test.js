import { fireEvent, render, screen, userEvent } from "@testing-library/react";
import SearchData from "./SearchData";

describe("Test input field", () => {
  render(<SearchData />);

  test("input filed", () => {
    const getText = screen.getByPlaceholderText("Search Breed...");
    expect(getText).toBeTruthy();
  });

  test("default input value", () => {
    render(<SearchData />);
    const userInput = screen.getByTestId("input");
    expect(userInput).toHaveValue("");
  });

  test("capture user input", async () => {
    render(<SearchData />);
    const userInput = screen.getByTestId("input");
    await fireEvent.change(userInput, { target: { value: "test" } });
    expect(userInput.value).toBe("test");
  });
});
