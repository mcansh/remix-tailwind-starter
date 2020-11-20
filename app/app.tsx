import * as React from "react";
import { Meta, Scripts, Styles, Routes, useGlobalData } from "@remix-run/react";

const App: React.VFC = () => {
  const data = useGlobalData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Styles />
      </head>
      <body className="dark:bg-gray-800 dark:text-white">
        <Routes />
        <footer className="pt-20 text-center text-gray-600 dark:text-white">
          <p>This page was rendered at {data.date.toLocaleString()}</p>
        </footer>

        <Scripts />
      </body>
    </html>
  );
};

export { App };
