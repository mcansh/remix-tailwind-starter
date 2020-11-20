import * as React from "react";
import { Meta, Scripts, Styles, Routes, useGlobalData } from "@remix-run/react";

const App: React.VFC = () => {
  let data = useGlobalData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Styles />
      </head>
      <body>
        <Routes />
        <Scripts />
        <footer className="pt-20 text-center text-gray-600">
          <p>This page was rendered at {data.date.toLocaleString()}</p>
        </footer>
      </body>
    </html>
  );
};

export { App };
