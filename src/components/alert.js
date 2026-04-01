/**
 * Alert Component
 * 
 * Usage: Copy and paste this code into your project
 * No dependencies required - just TailwindCSS
 */

// Info Alert (Dark Mode Support)
export const AlertInfo = `
<div class="flex items-start p-4 bg-blue-50 border border-blue-200 rounded-md dark:bg-blue-900/20 dark:border-blue-700">
  <svg class="w-5 h-5 text-blue-600 flex-shrink-0 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <div class="ml-3 flex-1">
    <p class="text-sm font-medium text-blue-800 dark:text-blue-300">Information</p>
    <p class="mt-1 text-sm text-blue-700 dark:text-blue-400">This is an informational message to help you understand the current state.</p>
  </div>
</div>
`;

// Success Alert (Dark Mode Support)
export const AlertSuccess = `
<div class="flex items-start p-4 bg-green-50 border border-green-200 rounded-md dark:bg-green-900/20 dark:border-green-700">
  <svg class="w-5 h-5 text-green-600 flex-shrink-0 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <div class="ml-3 flex-1">
    <p class="text-sm font-medium text-green-800 dark:text-green-300">Success</p>
    <p class="mt-1 text-sm text-green-700 dark:text-green-400">Your changes have been saved successfully.</p>
  </div>
</div>
`;

// Warning Alert (Dark Mode Support)
export const AlertWarning = `
<div class="flex items-start p-4 bg-yellow-50 border border-yellow-200 rounded-md dark:bg-yellow-900/20 dark:border-yellow-700">
  <svg class="w-5 h-5 text-yellow-600 flex-shrink-0 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
  </svg>
  <div class="ml-3 flex-1">
    <p class="text-sm font-medium text-yellow-800 dark:text-yellow-300">Warning</p>
    <p class="mt-1 text-sm text-yellow-700 dark:text-yellow-400">Please review your input before submitting.</p>
  </div>
</div>
`;

// Error Alert (Dark Mode Support)
export const AlertError = `
<div class="flex items-start p-4 bg-red-50 border border-red-200 rounded-md dark:bg-red-900/20 dark:border-red-700">
  <svg class="w-5 h-5 text-red-600 flex-shrink-0 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <div class="ml-3 flex-1">
    <p class="text-sm font-medium text-red-800 dark:text-red-300">Error</p>
    <p class="mt-1 text-sm text-red-700 dark:text-red-400">Something went wrong. Please try again later.</p>
  </div>
</div>
`;

// Alert with Close Button (Dark Mode Support)
export const AlertWithClose = `
<div class="flex items-start justify-between p-4 bg-blue-50 border border-blue-200 rounded-md dark:bg-blue-900/20 dark:border-blue-700">
  <div class="flex items-start flex-1">
    <svg class="w-5 h-5 text-blue-600 flex-shrink-0 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <div class="ml-3">
      <p class="text-sm font-medium text-blue-800 dark:text-blue-300">Information</p>
      <p class="mt-1 text-sm text-blue-700 dark:text-blue-400">This alert can be dismissed by clicking the close button.</p>
    </div>
  </div>
  <button class="flex-shrink-0 ml-4 text-blue-600 hover:text-blue-800 focus:outline-none dark:text-blue-400 dark:hover:text-blue-300">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  </button>
</div>
`;

// Simple Alert (Text Only, Dark Mode Support)
export const AlertSimple = `
<div class="p-4 bg-blue-50 border border-blue-200 rounded-md dark:bg-blue-900/20 dark:border-blue-700">
  <p class="text-sm text-blue-800 dark:text-blue-300">This is a simple alert message without an icon.</p>
</div>
`;

// Alert with Title Only (Dark Mode Support)
export const AlertTitleOnly = `
<div class="flex items-center p-4 bg-blue-50 border border-blue-200 rounded-md dark:bg-blue-900/20 dark:border-blue-700">
  <svg class="w-5 h-5 text-blue-600 flex-shrink-0 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <p class="ml-3 text-sm font-medium text-blue-800 dark:text-blue-300">Just a title, no description.</p>
</div>
`;
