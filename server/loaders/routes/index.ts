import type { DataLoader } from '@remix-run/core';

const loader: DataLoader = () => {
  const body = JSON.stringify({ message: 'this is awesome 😎' });
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export = loader;
