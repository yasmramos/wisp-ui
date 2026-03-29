# Wisp UI

**Light as a breath, built with TailwindCSS. Just copy, paste, and let it flow into your project.**

Wisp te ofrece un conjunto de componentes reutilizables y accesibles construidos con TailwindCSS. Sin dependencias ocultas, sin fricción: solo copias el código, lo pegas y funciona. Ideal para prototipos rápidos o proyectos en producción que necesitan mantener el control total sobre el markup.

## ✨ Características

- **Sin dependencias**: Solo necesitas TailwindCSS
- **Copiar y pegar**: Los componentes están listos para usar
- **Accesibles**: Siguen las mejores prácticas de accesibilidad
- **Personalizables**: Control total sobre el markup
- **Ligero**: Sin JavaScript innecesario
- **Responsive**: Diseñados para funcionar en todos los dispositivos

## 🚀 Instalación

### 1. Instala TailwindCSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configura tu `tailwind.config.js`

```js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. Importa los estilos base

En tu archivo CSS principal:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📦 Componentes Disponibles

### Botones

#### Primary Button
```html
<button class="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
  Button
</button>
```

#### Secondary Button
```html
<button class="inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-900 font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
  Button
</button>
```

#### Outline Button
```html
<button class="inline-flex items-center justify-center px-4 py-2 border border-gray-300 bg-transparent text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
  Button
</button>
```

### Inputs

#### Basic Input
```html
<label class="block">
  <span class="block text-sm font-medium text-gray-700 mb-1">Label</span>
  <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter text..." />
</label>
```

#### Input with Error
```html
<label class="block">
  <span class="block text-sm font-medium text-red-700 mb-1">Email</span>
  <input type="email" class="w-full px-3 py-2 border border-red-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-red-50" placeholder="invalid@email.com" value="invalid-email" />
  <p class="mt-1 text-sm text-red-600">Please enter a valid email address</p>
</label>
```

### Cards

#### Basic Card
```html
<div class="bg-white rounded-lg shadow-md p-6">
  <h3 class="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
  <p class="text-gray-600">This is a basic card component with some content inside.</p>
</div>
```

#### Pricing Card
```html
<div class="bg-white rounded-lg shadow-lg p-8 border-2 border-transparent hover:border-blue-500 transition-colors duration-300">
  <div class="text-center">
    <h3 class="text-xl font-semibold text-gray-900">Pro Plan</h3>
    <p class="text-gray-600 mt-2">Perfect for growing businesses</p>
    <div class="mt-6">
      <span class="text-4xl font-bold text-gray-900">$29</span>
      <span class="text-gray-600">/month</span>
    </div>
  </div>
  <ul class="mt-8 space-y-4">
    <li class="flex items-center">
      <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span class="text-gray-700">Unlimited Projects</span>
    </li>
    <li class="flex items-center">
      <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span class="text-gray-700">Analytics Dashboard</span>
    </li>
    <li class="flex items-center">
      <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span class="text-gray-700">24/7 Support</span>
    </li>
  </ul>
  <button class="w-full mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200">
    Get Started
  </button>
</div>
```

## 📁 Estructura del Proyecto

```
wisp/
├── src/
│   ├── components/
│   │   ├── button.js
│   │   ├── input.js
│   │   └── card.js
│   ├── styles/
│   │   └── wisp.css
│   ├── docs/
│   └── examples/
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Personalización

Puedes personalizar los colores y temas editando el archivo `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      wisp: {
        50: '#f8fafc',
        100: '#f1f5f9',
        // ... más colores
      }
    }
  }
}
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

Hecho con ❤️ usando TailwindCSS
