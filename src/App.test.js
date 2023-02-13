import { render } from '@testing-library/react';
import App from './App';

describe('SearchData', () => {
  it('should render the SearchData component', () => {
    const searchComponent = render(<App/>)
    expect(searchComponent.getByTestId('search')).toBeInTheDocument()
  });
});