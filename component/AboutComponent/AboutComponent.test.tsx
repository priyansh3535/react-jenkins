import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutComponent from './AboutComponent';

describe('<AboutComponent />', () => {
  test('it should mount', () => {
    render(<AboutComponent />);
    
    const aboutComponent = screen.getByTestId('AboutComponent');

    expect(aboutComponent).toBeInTheDocument();
  });
});