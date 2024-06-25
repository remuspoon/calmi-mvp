import React from 'react'

const InterestForm = () => {
    return (
        <form className='flex flex-col items-center drop-shadow-lg font-baloo-chettan-2'>
            <h1 className="text-center font-bold text-4xl mt-8">Interest Form</h1>
            <div className="flex flex-col items-start mt-4"> {/* Add a container div with top margin */}
                <div className="flex flex-row items-center mb-4"> {/* Add a flex container for each label and input with bottom margin */}
                    <input className="rounded border mx-auto block w-64 p-2 text-black" placeholder="Name" />
                </div>
                <div className="flex flex-row items-center mb-4"> {/* Add a flex container for each label and input with bottom margin */}
                    <input className="rounded border mx-auto block w-64 p-2 text-black" placeholder="Email" />
                </div>
            </div>
        </form>
    )
}

export default InterestForm;