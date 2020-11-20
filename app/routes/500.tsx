import * as React from "react";

function meta() {
  return { title: "Shoot..." };
}

const FiveHundred: React.VFC = () => {
  console.error("Check your server terminal output");

  return (
    <div>
      <h1>500</h1>
    </div>
  );
};

export default FiveHundred;
export { meta };
