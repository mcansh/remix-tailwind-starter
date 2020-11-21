import * as React from 'react';

function meta() {
  return { title: 'Shoot...' };
}

const FiveHundred = () => {
  console.error('Check your server terminal output');

  return (
    <div>
      <h1>500</h1>
    </div>
  );
};

export default FiveHundred;
export { meta };
