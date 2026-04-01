import { render, screen, fireEvent } from '@testing-library/react';
import { Alert } from '../Alert';

describe('Alert', () => {
  it('renders children correctly', () => {
    render(<Alert>This is an alert</Alert>);
    expect(screen.getByText('This is an alert')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    const { container: infoContainer } = render(<Alert variant="info">Info</Alert>);
    expect(infoContainer.firstChild).toHaveClass('bg-blue-50');

    const { container: successContainer } = render(<Alert variant="success">Success</Alert>);
    expect(successContainer.firstChild).toHaveClass('bg-green-50');

    const { container: warningContainer } = render(<Alert variant="warning">Warning</Alert>);
    expect(warningContainer.firstChild).toHaveClass('bg-yellow-50');

    const { container: errorContainer } = render(<Alert variant="error">Error</Alert>);
    expect(errorContainer.firstChild).toHaveClass('bg-red-50');
  });

  it('renders with title', () => {
    render(<Alert title="Alert Title">Alert content</Alert>);
    expect(screen.getByText('Alert Title')).toBeInTheDocument();
    expect(screen.getByText('Alert content')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(<Alert closable onClose={handleClose}>Dismissible alert</Alert>);
    
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalled();
  });

  it('does not render close button when onClose is not provided', () => {
    render(<Alert>No close button</Alert>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Alert className="custom-class">Content</Alert>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders without title when only children provided', () => {
    render(<Alert>Simple alert</Alert>);
    expect(screen.getByText('Simple alert')).toBeInTheDocument();
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });
});
