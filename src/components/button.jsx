import React from 'react';

export function Button({ onClick, children, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
    >
      {children}
    </button>
  );
}
