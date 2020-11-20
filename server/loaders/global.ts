import type { DataLoader } from '@remix-run/core';

const loader: DataLoader = () => {
  const body = JSON.stringify({ date: new Date() });
  return new Response(body, {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
};

export = loader;
