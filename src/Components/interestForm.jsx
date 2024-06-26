import React, {useState} from 'react'
import {db} from "../firebase.js";

const InterestForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('contacts').add({
            name:name,
            email:email,
        })
        .then(() => {
            setMessageSent(true);
        })
        .catch((error) => {
            alert(error.message);
        });

        setName("");
        setEmail("");
    };

    return (
        <form className='flex flex-col items-center drop-shadow-lg font-baloo-chettan-2'
        onSubmit={handleSubmit}>
            {messageSent ? (
                <h1 className='flex flex-low items-center font-bold text-4x1 mt-8'>Thank you for your response!</h1>
            ) : (
                <div>
                    <h1 className="text-center font-bold text-4xl mt-8">Join the waitlist!</h1>
                    <div className="flex flex-col items-start mt-4"> 
                        <div className="flex flex-row items-center mb-4"> 
                            <input className="rounded border mx-auto block w-64 p-2 text-black" 
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="flex flex-row items-center mb-4">
                            <input className="rounded border mx-auto block w-64 p-2 text-black" 
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="flex flex-row items-center mb-4">
                            <button className="rounded border mx-auto block w-64 p-2 text-white text-center bg-blue-950 text-MD shadow-lg justify-center font-baloo-chettan-2 font-medium border-blue-950 hover:bg-opacity-0 hover:border-2 hover:border-blue-950 hover:text-blue-950 duration-200">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </form>
    )
}

export default InterestForm;