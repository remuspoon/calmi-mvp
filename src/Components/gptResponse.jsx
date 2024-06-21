import React from 'react';

const GptResponse = ({ response }) => {
  return (
    <div className="mt-5 bg-white text-black rounded-lg shadow-md p-5">
      <h2 className="text-xl font-bold">GPT Response:</h2>
      <p>{response}</p>
    </div>
  );
};

export default GptResponse;
