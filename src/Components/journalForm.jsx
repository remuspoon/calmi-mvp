import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const JournalForm = ({ text, setText, handleGptResponse }) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(true);

    useEffect(() => {
        setIsEmpty(checkIfEmpty(text));
    }, [text]);

    const checkIfEmpty = (value) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = value;
        return tempDiv.textContent.trim().length === 0;
    };

    const handleChange = (value) => {
        setText(value);
        setIsEmpty(checkIfEmpty(value)); // Check for empty or whitespace-only content
    };

    const handleSubmit = () => {
        setIsSubmitting(true);
        handleGptResponse(text);
        setIsFormVisible(false);
    };

    return (
        <div>
            {isFormVisible && (
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
            )}
            <div className="flex justify-center">
                <button
                    onClick={handleSubmit}
                    disabled={isEmpty || isSubmitting}
                    className="text-white text-center mt-5 py-3 bg-blue-950 text-xl rounded-lg shadow-lg justify-center px-24 font-baloo-chettan-2 font-medium border-blue-950 hover:bg-opacity-0 hover:border-2 hover:border-blue-950 border-2 hover:text-blue-950 duration-200"
                    style={{ display: isSubmitting ? 'none' : 'block' }}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </div>
        </div>
    );
};

export default JournalForm;
