import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Modal from '../Modal';

describe('Modal', () => {
  it('renders when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()}>
        <p>Modal content</p>
      </Modal>
    );
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={vi.fn()}>
        <p>Modal content</p>
      </Modal>
    );
    expect(screen.queryByText('Modal content')).not.toBeInTheDocument();
  });

  it('calls onClose when clicking overlay', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <p>Modal content</p>
      </Modal>
    );
    // Simular click en el overlay usando data-testid
    const overlay = document.querySelector('[data-testid="modal-overlay"]');
    if (overlay) {
      fireEvent.click(overlay);
    }
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when pressing ESC key', async () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <p>Modal content</p>
      </Modal>
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not close when clicking modal content', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div data-testid="modal-content">
          <p>Modal content</p>
        </div>
      </Modal>
    );
    fireEvent.click(screen.getByTestId('modal-content'));
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('renders header, body and footer', () => {
    render(
      <Modal 
        isOpen={true} 
        onClose={vi.fn()}
        header={<h2>Modal Header</h2>}
        footer={<button>Save</button>}
      >
        <p>Modal Body</p>
      </Modal>
    );
    // Usar querySelector para encontrar el header ya que puede estar en un contenedor
    expect(document.querySelector('h2')).toBeInTheDocument();
    expect(screen.getByText('Modal Body')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  it('applies size classes correctly', () => {
    const { container } = render(
      <Modal isOpen={true} onClose={vi.fn()} size="lg">
        <p>Large Modal</p>
      </Modal>
    );
    // Buscamos el contenido del modal que tiene la clase max-w-lg
    const modalContent = container.querySelector('.max-w-lg');
    expect(modalContent).toBeInTheDocument();
  });

  it('respects disableOverlayClick prop', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} disableOverlayClick={true}>
        <p>Modal content</p>
      </Modal>
    );
    const overlay = document.querySelector('[data-testid="modal-overlay"]');
    if (overlay) {
      fireEvent.click(overlay);
    }
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('has correct accessibility attributes', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} ariaLabel="Test Modal">
        <p>Modal content</p>
      </Modal>
    );
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
  });
});
