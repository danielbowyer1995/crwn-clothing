import React from 'react';
import './sign-in-and-out.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndOutPage = () => (
    <div className='sign-in-and-out'>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
); 

export default SignInAndOutPage;