import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
  const currentYear = new Date().getFullYear();

  it('renders link to Athimannil website', () => {
    render(<Footer />);

    const link = screen.getByRole('link', { name: /Athimannil/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://www.athimannil.com/');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('displays current year in copyright text', () => {
    render(<Footer />);

    expect(
      screen.getByText(new RegExp(`© ${currentYear}`, 'i'))
    ).toBeInTheDocument();
  });

  it('displays correct year when year changes', () => {
    const futureYear = 2030;
    vi.setSystemTime(new Date(futureYear, 0, 1));

    render(<Footer />);

    expect(
      screen.getByText(new RegExp(`© ${futureYear}`, 'i'))
    ).toBeInTheDocument();
  });

  it('applies correct CSS classes to link', () => {
    render(<Footer />);

    const link = screen.getByRole('link', { name: /Athimannil/i });
    expect(link).toHaveClass('text-blue-500', 'hover:underline');
  });
});
