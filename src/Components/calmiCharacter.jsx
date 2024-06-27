import React, { useState, useEffect } from 'react';

const CalmiCharacter = ({ response, isLoading }) => {
    const [imageSrc, setImageSrc] = useState("././Calmi Look Up.png");

    useEffect(() => {
        if (response) {
            setImageSrc("././Calmi Face Forward.png");
        } 
        else if (isLoading) {
            setImageSrc("././Calmi Reading.png");
        }
        else {
            setImageSrc("././Calmi Look Up.png");
        }
    }, [response, isLoading]);

    return (
        <div className="md:fixed bottom-0 right-10 md:w-1/5 flex w-8/12 ml-20 md:ml-0">
            <img src={imageSrc} alt="" className="drop-shadow-xl" />
        </div>
    );
};

export default CalmiCharacter;