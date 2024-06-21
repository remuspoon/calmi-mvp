import React from 'react';

const GptResponse = ({ response }) => {
    return (
        <div className='flex flex-row'>
            <div className="mt-5 bg-white text-black rounded-lg shadow-md font-normal text-2xl p-5" style={{ display: response ? 'block' : 'none' }}>
                <p>{response}</p>
            </div>
            <div className="text-6xl mt-auto ml-[-5px] mb-5" style={{ display: response ? 'block' : 'none' }}>
                <div>&#9654;</div>
            </div>
        </div>
    );
};

export default GptResponse;
