import type { Loader } from '@remix-run/data';

const loader: Loader = () => {
  const body = JSON.stringify({ date: new Date() });
  return new Response(body, {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
};

export { loader };
