/**
 * Card Component
 * 
 * Usage: Copy and paste this code into your project
 * No dependencies required - just TailwindCSS
 */

// Basic Card
export const CardBasic = `
<div class="bg-white rounded-lg shadow-md p-6">
  <h3 class="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
  <p class="text-gray-600">This is a basic card component with some content inside.</p>
</div>
`;

// Card with Image
export const CardWithImage = `
<div class="bg-white rounded-lg shadow-md overflow-hidden">
  <img src="https://via.placeholder.com/400x200" alt="Card image" class="w-full h-48 object-cover" />
  <div class="p-6">
    <h3 class="text-lg font-semibold text-gray-900 mb-2">Card with Image</h3>
    <p class="text-gray-600 mb-4">This card includes an image at the top.</p>
    <button class="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200">
      Learn More
    </button>
  </div>
</div>
`;

// Card with Header and Footer
export const CardWithHeaderFooter = `
<div class="bg-white rounded-lg shadow-md overflow-hidden">
  <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
    <h3 class="text-lg font-semibold text-gray-900">Card Header</h3>
  </div>
  <div class="p-6">
    <p class="text-gray-600">Card content goes here. You can add any content you need.</p>
  </div>
  <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
    <button class="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200">
      Action
    </button>
  </div>
</div>
`;

// Interactive Card (Hover Effect)
export const CardInteractive = `
<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
  <h3 class="text-lg font-semibold text-gray-900 mb-2">Interactive Card</h3>
  <p class="text-gray-600">Hover over this card to see the shadow effect.</p>
</div>
`;

// Stat Card
export const CardStat = `
<div class="bg-white rounded-lg shadow-md p-6">
  <div class="flex items-center justify-between">
    <div>
      <p class="text-sm font-medium text-gray-600">Total Users</p>
      <p class="text-3xl font-bold text-gray-900 mt-1">1,234</p>
    </div>
    <div class="p-3 bg-blue-100 rounded-full">
      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    </div>
  </div>
  <div class="mt-4 flex items-center text-sm">
    <span class="text-green-600 font-medium">+12%</span>
    <span class="text-gray-500 ml-2">from last month</span>
  </div>
</div>
`;

// Pricing Card
export const CardPricing = `
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
`;
