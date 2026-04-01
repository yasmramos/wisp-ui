import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../Input';

describe('Input', () => {
  it('renders correctly with label', () => {
    render(<Input id="test" label="Test Label" data-testid="input-test" />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<Input id="test" placeholder="Enter text..." data-testid="input-test" />);
    expect(screen.getByPlaceholderText('Enter text...')).toBeInTheDocument();
  });

  it('handles value changes', () => {
    const handleChange = vi.fn();
    render(<Input id="test" value="" onChange={handleChange} data-testid="input-test" />);
    
    fireEvent.change(screen.getByTestId('input-test'), { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('shows error state', () => {
    render(<Input id="test" error="This is an error" data-testid="input-test" />);
    expect(screen.getByText('This is an error')).toBeInTheDocument();
  });

  it('shows helper text', () => {
    render(<Input id="test" helperText="This is helper text" data-testid="input-test" />);
    expect(screen.getByText('This is helper text')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input id="test" disabled data-testid="input-test" />);
    expect(screen.getByTestId('input-test')).toBeDisabled();
  });

  it('renders with leftIcon', () => {
    render(<Input id="test" leftIcon={<svg data-testid="icon">icon</svg>} data-testid="input-test" />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders textarea when as prop is textarea', () => {
    render(<Input id="test" as="textarea" data-testid="textarea-test" />);
    expect(screen.getByTestId('textarea-test')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Input id="test" className="custom-class" data-testid="input-test" />);
    expect(screen.getByTestId('input-test')).toHaveClass('custom-class');
  });
});
