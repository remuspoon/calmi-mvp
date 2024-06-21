import React, { useState, useEffect } from 'react';

const CalmiCharacter = ({ response }) => {
    const [imageSrc, setImageSrc] = useState("././Calmi Look Up.png");

    useEffect(() => {
        if (response) {
            setImageSrc("././Calmi Face Forward.png");
        } else {
            setImageSrc("././Calmi Look Up.png");
        }
    }, [response]);

    return (
        <div className="self-end mr-12">
            <img src={imageSrc} alt="" className='drop-shadow-xl'/>
        </div>
    );
};

export default CalmiCharacter;