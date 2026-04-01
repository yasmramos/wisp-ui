# Wisp UI

**Light as a breath, built with TailwindCSS.** Just copy, paste, and let it flow into your project.

## Features

- ✅ **Zero Dependencies** - Only requires TailwindCSS
- ✅ **Copy & Paste** - No installation needed
- ✅ **Dark Mode Support** - All components support dark mode out of the box
- ✅ **Accessible** - Built with accessibility in mind
- ✅ **Responsive** - Works on all screen sizes
- ✅ **Customizable** - Easy to modify and extend

## Components

### Buttons
- Primary, Secondary, Outline, Ghost, Danger, Success
- Small, Medium, Large sizes
- Icon buttons
- Full width support
- Disabled state

### Inputs
- Text inputs with labels
- Error states with validation messages
- Helper text
- Disabled inputs
- Inputs with icons
- Textareas
- Select dropdowns
- Checkboxes and Radio buttons

### Cards
- Basic cards
- Cards with images
- Cards with header/footer
- Interactive hover effects
- Stat cards
- Pricing cards

### Alerts
- Info, Success, Warning, Error variants
- Dismissible alerts with close button
- Simple text-only alerts
- Title-only alerts

## Installation

Wisp UI doesn't require installation. Simply copy the component code you need from the `src/components` directory and paste it into your project.

### Requirements
- TailwindCSS v3.x installed in your project
- Dark mode enabled in your Tailwind config (optional):

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media'
  // ... rest of your config
}
```

## Usage

### Light/Dark Mode Toggle

To enable dark mode, add the `dark` class to your HTML element:

```html
<!-- Light mode (default) -->
<html>

<!-- Dark mode -->
<html class="dark">
```

Or use JavaScript to toggle:

```javascript
// Toggle dark mode
document.documentElement.classList.toggle('dark');

// Check user preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}
```

### Example: Button Component

```html
<!-- Copy from src/components/button.js -->
<button class="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-500 dark:hover:bg-blue-600">
  Click Me
</button>
```

### Example: Alert Component

```html
<!-- Success Alert -->
<div class="flex items-start p-4 bg-green-50 border border-green-200 rounded-md dark:bg-green-900/20 dark:border-green-700">
  <svg class="w-5 h-5 text-green-600 flex-shrink-0 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <div class="ml-3 flex-1">
    <p class="text-sm font-medium text-green-800 dark:text-green-300">Success</p>
    <p class="mt-1 text-sm text-green-700 dark:text-green-400">Your changes have been saved successfully.</p>
  </div>
</div>
```

## Development

```bash
# Install dependencies
npm install

# Build CSS
npm run build:css

# Watch for changes
npm run watch:css
```

## Project Structure

```
wisp-ui/
├── src/
│   ├── components/
│   │   ├── index.js       # Export all components
│   │   ├── button.js      # Button variants
│   │   ├── input.js       # Input components
│   │   ├── card.js        # Card components
│   │   └── alert.js       # Alert components
│   └── styles/
│       └── wisp.css       # Base styles
├── dist/
│   └── wisp.css           # Built CSS
├── package.json
└── README.md
```

## License

MIT License - Feel free to use in any project!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Made with ❤️ using TailwindCSS
