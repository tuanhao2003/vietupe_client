import React from 'react';

export function Input(props) {
  return (
    <input
      {...props}
      className="px-4 py-2 rounded-lg border border-gray-600 text-white bg-transparent placeholder-gray-400 w-full max-w-[350px]"
    />
  );
}
