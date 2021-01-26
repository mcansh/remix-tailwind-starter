import * as React from 'react';
import { useRouteData } from '@remix-run/react';

function meta() {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  };
}

const Index: React.VFC = () => {
  const data = useRouteData<{ message: string }>();

  return (
    <div className="p-5 text-center">
      <h2 className="font-medium">Welcome to Remix!</h2>
      <p>
        <a href="https://remix.run/dashboard/docs">Check out the docs</a> to get
        started.
      </p>
      <p>Message from the loader: {data.message}</p>
    </div>
  );
};

export default Index;
export { meta };
