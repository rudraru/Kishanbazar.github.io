import React from 'react';

// styling
import './Component/Page/Signup.css';

const SignUp = () => {

  return (
    <div className="form-comp cfb">
      <h1>Create an Account!</h1>
      <form className="sign-up-form cfb">
       <label className='name' >Name
      <input type='text' placeholder='Enter Name' required/>
      </label>
      <label className='name'>Password*
      <input type='password'  placeholder='Enter Password' required></input>
      </label>
      <label className='name'>Confirm Password*
      <input type='Password'  placeholder='Confirm Password ' required></input>
      </label>
      <label className='name'>Email*
      <input type='email'  placeholder='something@gmail.com'></input>
      </label>
  
        <button>
          Sign Up!
        </button>
      </form>
    </div>
  );
}

export default SignUp;
