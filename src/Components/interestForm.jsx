import React from 'react'

const InterestForm = () => {
    return (
        <form className='form'>
            <h1>Interest Form</h1>
            <label>Name</label>
            <input placeholder="Name"/>

            <label>Email</label>
            <input placeholder="Email"/>

            <label>How do you improve your own mental health?</label>
            <textarea placeholder="Type Here: "></textarea>
        </form>
    )
}

export default InterestForm;