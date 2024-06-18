import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../src/pages/Home';

describe('Home component', () => {
  it('renders navbar', () => {
    render(<Home />);
    expect(screen.getByRole('navigation')).toMatch('hi');
  });
});
