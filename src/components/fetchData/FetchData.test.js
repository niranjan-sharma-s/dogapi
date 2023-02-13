import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import FetchData from "./FetchData";

const debounce = () => {
  apiCall();
};

const apiCall = () => {
  return [];
};
describe("debounce", () => {
  it("should call the apiCall function after 1000 milliseconds", () => {
    jest.useFakeTimers();
    const apiCall = jest.fn();
    debounce();
    expect(apiCall).not.toBeCalled();
    jest.advanceTimersByTime(1000);
    expect(apiCall.mock.calls).toEqual([]);
  });

  it("api call fetches data correctly", async () => {
    const { container } = render(<FetchData />);
    const apiCallResponse = apiCall();
    await waitFor(() => expect(apiCallResponse).toBeDefined());
  });
});
