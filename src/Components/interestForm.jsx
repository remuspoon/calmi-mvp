import React from 'react'

const InterestForm = () => {
    return (
        <form className='flex flex-col items-center drop-shadow-lg font-baloo-chettan-2 '>
            <h1 className="text-center font-bold text-4xl mt-8 ">Interest Form</h1>
            <label className="text-center font-medium mt-3 mb-2 text-lg">Name</label>
            <input className="rounded border mx-auto block w-64 p-2 text-black" placeholder="Name" />

            <label className="text-center font-medium mt-3 mb-2 text-lg">Email</label>
            <input className="rounded border mx-auto block w-64 p-2 text-black" placeholder="Email" />

            <label className="text-center font-medium mt-3 mb-2 text-lg">How do you improve your own mental health?</label>
            <textarea className="rounded border mx-auto block w-64 p-2 text-black" placeholder="Type Here:" />
        </form>
    )
}

export default InterestForm;