import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Card className="custom-class">Content</Card>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders with image', () => {
    render(
      <Card>
        <img src="test.jpg" alt="Test" data-testid="card-image" />
        <p>Content</p>
      </Card>
    );
    expect(screen.getByTestId('card-image')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders header and footer', () => {
    render(
      <Card>
        <div data-testid="card-header">Header</div>
        <div>Body</div>
        <div data-testid="card-footer">Footer</div>
      </Card>
    );
    expect(screen.getByTestId('card-header')).toBeInTheDocument();
    expect(screen.getByTestId('card-footer')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    const { container: basicContainer } = render(<Card variant="basic">Basic</Card>);
    expect(basicContainer.firstChild).toHaveClass('border-gray-200');

    const { container: elevatedContainer } = render(<Card variant="elevated">Elevated</Card>);
    expect(elevatedContainer.firstChild).toHaveClass('shadow-lg');

    const { container: outlinedContainer } = render(<Card variant="outlined">Outlined</Card>);
    expect(outlinedContainer.firstChild).toHaveClass('border-2');
  });

  it('renders stat card variant', () => {
    render(
      <Card>
        <h3>Stats</h3>
        <p data-testid="stat-value">123</p>
      </Card>
    );
    expect(screen.getByText('Stats')).toBeInTheDocument();
    expect(screen.getByTestId('stat-value')).toHaveTextContent('123');
  });
});
