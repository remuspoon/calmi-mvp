import React from 'react'

const InterestForm = () => {
    return (
        <form className='flex flex-col items-center drop-shadow-lg font-baloo-chettan-2'>
            <h1 className="text-center font-bold text-4xl mt-8">Join the waitlist!</h1>
            <div className="flex flex-col items-start mt-4"> 
                <div className="flex flex-row items-center mb-4"> 
                    <input className="rounded border mx-auto block w-64 p-2 text-black" placeholder="Name" />
                </div>
                <div className="flex flex-row items-center mb-4">
                    <input className="rounded border mx-auto block w-64 p-2 text-black" placeholder="Email" />
                </div>
                <div className="flex flex-row items-center mb-4">
                    <button className="rounded border mx-auto block w-64 p-2 text-white text-center bg-blue-950 text-MD shadow-lg justify-center font-baloo-chettan-2 font-medium border-blue-950 hover:bg-opacity-0 hover:border-2 hover:border-blue-950 hover:text-blue-950 duration-200">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    )
}

export default InterestForm;