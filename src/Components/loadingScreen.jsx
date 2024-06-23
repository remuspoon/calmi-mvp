import React from 'react';
import '../App.scss';

const LoadingScreen = () => {
    return (
        <div className="flex justify-center items-center mt-20">
            <div className="loading loading04 flex font-baloo-chettan-2 font-bold text-5xl space-x-1 drop-shadow-lg">
                <span className="block">R</span>
                <span className="block">e</span>
                <span className="block">a</span>
                <span className="block">d</span>
                <span className="block">i</span>
                <span className="block">n</span>
                <span className="block">g</span>
                <span className="block">.</span>
                <span className="block">.</span>
                <span className="block">.</span>
            </div>
        </div>
    );
};

export default LoadingScreen;