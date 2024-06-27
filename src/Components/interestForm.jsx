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
                    <div className='text-center mb-5 font-baloo-chettan-2 font-bold'>
                        <h1 className='md:text-5xl text-4xl'>What if your journal could be an active listener? </h1>
                        <div className=' px-8 pb-10'>
                        <h2 className='md:text-4xl text-3xl font-bold mt-10 text-blue-950 text-justify '>With Calmi, it is!</h2>
                        <p className='md:text-2xl text-lg font-semibold md:text-justify text-left mt-8 text-blue-950'>We are developing a journal app that <em>transforms</em> your journaling experience!</p>
                        <p className='md:text-2xl text-lg font-semibold md:text-justify text-left mt-8 text-blue-950'>Imagine each time you log a new entry, you recieve thoughtful and personalised feedback. Overtime, your journal can even build an understanding of your behaviours and recommend helpful advice!</p>
                        <p className='md:text-2xl text-lg font-semibold md:text-justify text-left mt-8 text-blue-950'>Our mission is to make your journaling experience <em>Easy, Rewarding and Insightful.</em> If you want to find out more, please join our waitlist!</p>
                        </div>
                    </div>
                    <h1 className="text-center font-bold text-4xl mt-4 text-blue-950">Join the waitlist!</h1>
                    <div className="flex flex-col items-center mt-4 md:pb-72"> 
                        <div className="flex flex-row items-center mb-4"> 
                            <input className="rounded border mx-auto block w-64 p-2 text-blue-950" 
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="flex flex-row items-center mb-4">
                            <input className="rounded border mx-auto block w-64 p-2 text-blue-950" 
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