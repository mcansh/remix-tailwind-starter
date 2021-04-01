import * as React from 'react';
import type { LinksFunction } from '@remix-run/react';
import { Meta, Scripts, Links, useRouteData } from '@remix-run/react';
import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { Outlet } from 'react-router';

import globalCSS from './styles/global.css';
import interCSS from './styles/inter.css';

interface RouteData {
  date: Date;
}

const loader: LoaderFunction = () => {
  const body = JSON.stringify({ date: new Date() });
  return new Response(body, {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
};

const links: LinksFunction = () => [
  { rel: 'stylesheet', href: globalCSS },
  { rel: 'stylesheet', href: interCSS },
  { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  { rel: 'apple-touch-startup-image', href: '/apple-touch-icon.png' },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/site.webmanifest' },
];

const meta: MetaFunction = () => ({
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  'format-detection': 'telephone=no',
  'apple-mobile-web-app-title': 'Remix + Tailwind Starter',
  'apple-mobile-web-app-capable': 'yes',
  'apple-mobile-web-app-status-bar-style': 'black-transparent',
  'theme-color': '#000',
  'mobile-web-app-capable': 'yes',
  'msapplication-config': '/browserconfig.xml',
  'msapplication-TileColor': '#000',
});

const App: React.VFC = () => {
  const data = useRouteData<RouteData>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body className="dark:bg-gray-800 dark:text-white">
        <Outlet />
        <footer className="pt-20 text-center text-gray-600 dark:text-white">
          <p>This page was rendered at {data.date.toLocaleString()}</p>
        </footer>

        <Scripts />
      </body>
    </html>
  );
};

interface ErrorBoundaryProps {
  error: Error;
}

const ErrorBoundary: React.VFC<ErrorBoundaryProps> = ({ error }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>Oops!</title>
      <Links />
    </head>
    <body>
      <div>
        <h1>App Error</h1>
        <pre>{error.message}</pre>
        <p>
          Replace this UI with what you want users to see when your app throws
          uncaught errors. The file is at <code>app/App.tsx</code>.
        </p>
      </div>

      <Scripts />
    </body>
  </html>
);

export default App;
export { ErrorBoundary, links, loader, meta };
