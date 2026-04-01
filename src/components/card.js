/**
 * Card Component
 * 
 * Usage: Copy and paste this code into your project
 * No dependencies required - just TailwindCSS
 */

// Basic Card (Dark Mode Support)
export const CardBasic = `
<div class="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800">
  <h3 class="text-lg font-semibold text-gray-900 mb-2 dark:text-white">Card Title</h3>
  <p class="text-gray-600 dark:text-gray-300">This is a basic card component with some content inside.</p>
</div>
`;

// Card with Image (Dark Mode Support)
export const CardWithImage = `
<div class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
  <img src="https://via.placeholder.com/400x200" alt="Card image" class="w-full h-48 object-cover" />
  <div class="p-6">
    <h3 class="text-lg font-semibold text-gray-900 mb-2 dark:text-white">Card with Image</h3>
    <p class="text-gray-600 mb-4 dark:text-gray-300">This card includes an image at the top.</p>
    <button class="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 dark:bg-blue-500 dark:hover:bg-blue-600">
      Learn More
    </button>
  </div>
</div>
`;

// Card with Header and Footer (Dark Mode Support)
export const CardWithHeaderFooter = `
<div class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
  <div class="px-6 py-4 bg-gray-50 border-b border-gray-200 dark:bg-gray-700 dark:border-gray-600">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Card Header</h3>
  </div>
  <div class="p-6">
    <p class="text-gray-600 dark:text-gray-300">Card content goes here. You can add any content you need.</p>
  </div>
  <div class="px-6 py-4 bg-gray-50 border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
    <button class="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 dark:bg-blue-500 dark:hover:bg-blue-600">
      Action
    </button>
  </div>
</div>
`;

// Interactive Card (Hover Effect, Dark Mode Support)
export const CardInteractive = `
<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer dark:bg-gray-800">
  <h3 class="text-lg font-semibold text-gray-900 mb-2 dark:text-white">Interactive Card</h3>
  <p class="text-gray-600 dark:text-gray-300">Hover over this card to see the shadow effect.</p>
</div>
`;

// Stat Card (Dark Mode Support)
export const CardStat = `
<div class="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800">
  <div class="flex items-center justify-between">
    <div>
      <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Total Users</p>
      <p class="text-3xl font-bold text-gray-900 mt-1 dark:text-white">1,234</p>
    </div>
    <div class="p-3 bg-blue-100 rounded-full dark:bg-blue-900/30">
      <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    </div>
  </div>
  <div class="mt-4 flex items-center text-sm">
    <span class="text-green-600 font-medium dark:text-green-400">+12%</span>
    <span class="text-gray-500 ml-2 dark:text-gray-400">from last month</span>
  </div>
</div>
`;

// Pricing Card (Dark Mode Support)
export const CardPricing = `
<div class="bg-white rounded-lg shadow-lg p-8 border-2 border-transparent hover:border-blue-500 transition-colors duration-300 dark:bg-gray-800">
  <div class="text-center">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Pro Plan</h3>
    <p class="text-gray-600 mt-2 dark:text-gray-300">Perfect for growing businesses</p>
    <div class="mt-6">
      <span class="text-4xl font-bold text-gray-900 dark:text-white">$29</span>
      <span class="text-gray-600 dark:text-gray-300">/month</span>
    </div>
  </div>
  <ul class="mt-8 space-y-4">
    <li class="flex items-center">
      <svg class="w-5 h-5 text-green-500 mr-3 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span class="text-gray-700 dark:text-gray-300">Unlimited Projects</span>
    </li>
    <li class="flex items-center">
      <svg class="w-5 h-5 text-green-500 mr-3 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span class="text-gray-700 dark:text-gray-300">Analytics Dashboard</span>
    </li>
    <li class="flex items-center">
      <svg class="w-5 h-5 text-green-500 mr-3 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span class="text-gray-700 dark:text-gray-300">24/7 Support</span>
    </li>
  </ul>
  <button class="w-full mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 dark:bg-blue-500 dark:hover:bg-blue-600">
    Get Started
  </button>
</div>
`;
