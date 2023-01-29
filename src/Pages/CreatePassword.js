import React from 'react'
import './CreatePassword.css';
import logo from '../limg/createpass.png'; 


function CreatePassword() {
    return(
        <div className='CreatePassword'>
            <h1>Create Password</h1>
            <h2>Create New Password</h2>
            <h3 className='p3'>Your new password must be different from previous used passwords</h3>

            <input className='password' type="text" placeholder=" Password" />
            <input className='confirm' type="text" placeholder=" Confirm Password" />

            <button className='create'>Create</button>

            
            <img className='img' height={500} width={500} src={logo} alt='' />

        </div>

        )  
    }



    export default CreatePassword
