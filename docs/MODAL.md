# Modal Component

A flexible and accessible modal dialog component with dark mode support.

## Features

- ✅ Multiple size variants (sm, md, lg, xl, full)
- ✅ Customizable header, body, and footer
- ✅ Close on overlay click or ESC key
- ✅ Body scroll prevention when open
- ✅ Accessible with ARIA attributes
- ✅ Dark mode support
- ✅ Smooth animations
- ✅ No external dependencies

## Installation

```bash
npm install wisp-ui
```

## Usage

### Basic Modal

```jsx
import { Modal } from 'wisp-ui';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Basic Modal"
      >
        <p>This is a basic modal dialog.</p>
      </Modal>
    </>
  );
}
```

### Modal with Footer Actions

```jsx
import { Modal, ButtonPrimary, ButtonSecondary } from 'wisp-ui';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm Action"
        footer={
          <>
            <ButtonSecondary onClick={() => setIsOpen(false)}>
              Cancel
            </ButtonSecondary>
            <ButtonPrimary onClick={() => setIsOpen(false)}>
              Confirm
            </ButtonPrimary>
          </>
        }
      >
        <p>Are you sure you want to proceed with this action?</p>
      </Modal>
    </>
  );
}
```

### Different Sizes

```jsx
import { Modal } from 'wisp-ui';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Small Modal</button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Small Modal"
        size="sm"
      >
        <p>This is a small modal.</p>
      </Modal>
    </>
  );
}
```

**Available sizes:** `sm`, `md`, `lg`, `xl`, `full`

### Modal without Overlay

```jsx
import { Modal } from 'wisp-ui';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="No Overlay"
        showOverlay={false}
      >
        <p>This modal appears without an overlay background.</p>
      </Modal>
    </>
  );
}
```

### Disable Close Behaviors

```jsx
import { Modal } from 'wisp-ui';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Cannot Close Easily"
        closeOnOverlay={false}
        closeOnEsc={false}
      >
        <p>This modal cannot be closed by clicking outside or pressing ESC.</p>
        <button onClick={() => setIsOpen(false)}>Close anyway</button>
      </Modal>
    </>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | boolean | required | Controls the visibility of the modal |
| `onClose` | function | required | Callback function when modal closes |
| `title` | string | - | Modal title (optional, omit for no header) |
| `children` | ReactNode | required | Modal content |
| `footer` | ReactNode | - | Optional footer content (buttons, actions) |
| `size` | string | `'md'` | Modal size: `'sm'`, `'md'`, `'lg'`, `'xl'`, `'full'` |
| `closeOnOverlay` | boolean | `true` | Allow closing by clicking overlay |
| `closeOnEsc` | boolean | `true` | Allow closing by pressing ESC key |
| `showOverlay` | boolean | `true` | Show overlay background |

## Accessibility

The Modal component includes several accessibility features:

- **ARIA attributes**: `role="dialog"` and `aria-modal="true"`
- **Keyboard navigation**: Closes with ESC key
- **Focus management**: Prevents interaction with background content
- **Screen reader support**: Title is linked with `aria-labelledby`

## Dark Mode

The Modal automatically adapts to dark mode when using TailwindCSS with `darkMode: 'class'`:

```jsx
// Enable dark mode
<html className="dark">
  <body>
    <YourApp />
  </body>
</html>
```

## Examples

See the `examples/modal-example.html` file for a complete working example.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
