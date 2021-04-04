import * as React from 'react';
import { useRouteData } from '@remix-run/react';
import type {
  HeadersFunction,
  LoaderFunction,
  MetaFunction,
  RouteComponent,
} from '@remix-run/node';

const handle = { hydrate: false };

const loader: LoaderFunction = () => {
  const body = JSON.stringify({ message: 'this is awesome 😎' });
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const meta: MetaFunction = () => ({
  title: 'Remix + Tailwind Starter',
  description: 'Welcome to Remix with Tailwind!',
});

const headers: HeadersFunction = () => ({
  'Cache-Control': 's-maxage=1, stale-while-revalidate=59',
});

const Index: RouteComponent = () => {
  const data = useRouteData<{ message: string }>();

  return (
    <div className="p-5 text-center">
      <h2 className="font-medium">Welcome to Remix with Tailwind!</h2>
      <p>
        <a className="text-blue-600" href="https://docs.remix.run">
          Check out the docs
        </a>{' '}
        to get started.
      </p>
      <p>Message from the loader: {data.message}</p>
    </div>
  );
};

export default Index;
export { handle, headers, loader, meta };
