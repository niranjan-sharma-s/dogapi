import { fireEvent, render, screen, userEvent } from "@testing-library/react";
import SearchData from "./SearchData";

describe("Test input field", () => {
  it("input filed", () => {
    render(<SearchData />);
    const getText = screen.getByPlaceholderText("Search Breed...");
    expect(getText).toBeTruthy();
  });

  it("test search input", () => {
    const { getByTestId } = render(<SearchData />);
    const input = getByTestId("input");
    expect(input).toBeTruthy();
    fireEvent.change(input, { target: { value: "mixed" } });
    expect(input.value).toBe("mixed");
  });
});
