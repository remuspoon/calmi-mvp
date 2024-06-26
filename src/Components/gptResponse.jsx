import React from 'react';

const GptResponse = ({ response }) => {
    return (
        <div className='flex md:flex-row flex-col md:justify-end md:p-0 px-5'>
            <div className="mt-25 md:mt-36 bg-white text-blue-950 rounded-2xl shadow-md font-normal md:text-2xl text-lg md:p-8 p-4 text-left" style={{ display: response ? 'block' : 'none' }}>
                <p>{response}</p>
            </div>
            {response && (
                <div className="text-6xl md:mt-auto md:mb-2 mb-0 mt-[-34px] md:mr-0 mr-10 md:ml-[-10px] md:text-left text-right">
                    <div>&#9654;</div>
                </div>
            )}
        </div>
    );
};

export default GptResponse;
