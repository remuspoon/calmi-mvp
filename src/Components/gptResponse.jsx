import React from 'react';

const GptResponse = ({ response }) => {
    return (
        <div className='flex flex-row'>
            <div className="mt-20 bg-white text-black rounded-2xl shadow-md font-normal text-2xl p-5" style={{ display: response ? 'block' : 'none' }}>
                <p>{response}</p>
            </div>
            <div className="text-6xl mt-auto ml-[-10px] mb-2" style={{ display: response ? 'block' : 'none' }}>
                <div>&#9654;</div>
            </div>
        </div>
    );
};

export default GptResponse;
