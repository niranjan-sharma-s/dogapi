import { render, screen, fireEvent } from "@testing-library/react";
import ShowData from "./ShowData";

describe("Testing ShowData component", () => {
  it("ShowData component test", () => {
    const breed = { breedName: "Hound" };
    const { getByTestId, getByText } = render(<ShowData breed={breed} />);
    expect(getByTestId("container")).toBeInTheDocument();
  });
});
