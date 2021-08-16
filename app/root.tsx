import * as React from 'react';
import type { LinksFunction, LoaderFunction, MetaFunction } from 'remix';
import {
  LiveReload,
  useMatches,
  Meta,
  Scripts,
  Links,
  useRouteData,
  json,
} from 'remix';
import { Outlet } from 'react-router';

import globalCSS from './styles/global.css';
import interCSS from './styles/inter.css';

interface RouteData {
  date: Date;
}

const loader: LoaderFunction = () => json({ date: new Date() });

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
  const matches = useMatches();
  const includeScripts = matches.some(match => match.handle?.hydrate !== false);

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
          <p>
            This page was rendered at{' '}
            {new Date(data.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
            })}
          </p>
        </footer>

        {includeScripts && <Scripts />}

        {process.env.NODE_ENV === 'development' && <LiveReload />}
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
