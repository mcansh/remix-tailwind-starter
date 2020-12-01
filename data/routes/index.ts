import type { Loader } from '@remix-run/data';

const loader: Loader = () => {
  const body = JSON.stringify({ message: 'this is awesome 😎' });
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export { loader };
