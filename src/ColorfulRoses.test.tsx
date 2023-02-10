import { render, screen } from '@testing-library/react';
import ColorfulRoses from './ColorfulRoses';

describe('ColorfulRoses', () => {
  it('renders the correct colors', () => {
    render(<ColorfulRoses />);

    expect(screen.getByText(/Roses are red, Violets are blue 🌹💙/)).toBeInTheDocument();
  });
});
