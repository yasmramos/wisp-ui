/**
 * Input Component
 * 
 * Usage: Copy and paste this code into your project
 * No dependencies required - just TailwindCSS
 */

// Basic Input
export const InputBasic = `
<label class="block">
  <span class="block text-sm font-medium text-gray-700 mb-1">Label</span>
  <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter text..." />
</label>
`;

// Input with Error
export const InputError = `
<label class="block">
  <span class="block text-sm font-medium text-red-700 mb-1">Email</span>
  <input type="email" class="w-full px-3 py-2 border border-red-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-red-50" placeholder="invalid@email.com" value="invalid-email" />
  <p class="mt-1 text-sm text-red-600">Please enter a valid email address</p>
</label>
`;

// Input with Helper Text
export const InputHelper = `
<label class="block">
  <span class="block text-sm font-medium text-gray-700 mb-1">Username</span>
  <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Choose a username" />
  <p class="mt-1 text-sm text-gray-500">This will be your public display name</p>
</label>
`;

// Disabled Input
export const InputDisabled = `
<label class="block">
  <span class="block text-sm font-medium text-gray-500 mb-1">Disabled</span>
  <input type="text" disabled class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 bg-gray-100 cursor-not-allowed opacity-60" placeholder="Cannot edit" value="Disabled value" />
</label>
`;

// Input with Icon
export const InputWithIcon = `
<label class="block">
  <span class="block text-sm font-medium text-gray-700 mb-1">Search</span>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </div>
    <input type="text" class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
  </div>
</label>
`;

// Textarea
export const Textarea = `
<label class="block">
  <span class="block text-sm font-medium text-gray-700 mb-1">Message</span>
  <textarea rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y" placeholder="Type your message..."></textarea>
</label>
`;

// Select
export const Select = `
<label class="block">
  <span class="block text-sm font-medium text-gray-700 mb-1">Country</span>
  <select class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
    <option>Select a country</option>
    <option>United States</option>
    <option>Canada</option>
    <option>Mexico</option>
    <option>United Kingdom</option>
  </select>
</label>
`;

// Checkbox
export const Checkbox = `
<label class="inline-flex items-center">
  <input type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
  <span class="ml-2 text-sm text-gray-700">I agree to the terms</span>
</label>
`;

// Radio
export const Radio = `
<div class="space-y-2">
  <label class="flex items-center">
    <input type="radio" name="option" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
    <span class="ml-2 text-sm text-gray-700">Option 1</span>
  </label>
  <label class="flex items-center">
    <input type="radio" name="option" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
    <span class="ml-2 text-sm text-gray-700">Option 2</span>
  </label>
</div>
`;
