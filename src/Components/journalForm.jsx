import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const JournalForm = ({ text, setText, handleGptResponse }) => {
  const handleChange = (value) => {
    setText(value);
  };

  // Function to handle submit button click

const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = () => {
    setIsSubmitting(true);
    handleGptResponse(text);
};

return (
    <div>
        <div className='bg-white text-black rounded-lg shadow-md mt-5 overflow-hidden' style={{ minHeight: '270px' }}>
            <ReactQuill
                value={text}
                onChange={handleChange}
                theme='bubble'
                className='custom-quill'
                placeholder='How are you feeling...'
                modules={{ toolbar: false }}
            />
        </div>
        <div className="flex justify-center">
            <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="text-white text-center mt-5 py-3 bg-blue-950 text-xl rounded-lg shadow-lg justify-center px-24 font-baloo-chettan-2 font-medium border-blue-950 hover:bg-opacity-0 hover:border-2 hover:border-blue-950 border-2 hover:text-blue-950 duration-200"
            >
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
        </div>
    </div>
);
};

export default JournalForm;
