import React from 'react'

const SignupForm = () => {

    

    return (
        <>
            <form>
                <label>First name</label>
                <input type='text' name='first-name' placeholder='Enter Your First Name' />
                <label>Last name</label>
                <input type='text' name='last-name' placeholder='Enter Your Last Name' />
                <label>Email</label>
                <input type='text' name='email'/>
                <label>Create Password</label>
                <input type='text' name='password' />
                
                <input type='submit' />
            </form>
        </>
    )
}

export default SignupForm
