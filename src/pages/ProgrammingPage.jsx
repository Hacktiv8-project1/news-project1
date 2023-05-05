import React from 'react'
import CardComponent from '../components/CardComponent';

function ProgrammingPage() {
  return (
    <div className="md:container md:mx-auto">
      <div>
        <h1 className="text-center mb-10 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Programming News
        </h1>
      </div>
      <CardComponent />
    </div>
  );
}

export default ProgrammingPage