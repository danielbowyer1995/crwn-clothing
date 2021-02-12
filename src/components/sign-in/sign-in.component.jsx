import React, { Component } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component{
    constructor(){
        super();

        this.state = {
            email: '',
            password: '',

        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name } = event.target;
        this.setState({ [name]: value })
    }

    render(){
        return (
            <div className='sign-in'>
                <h1> I ALREADY HAVE AN ACCOUNT </h1>
                <span> SIGN IN WITH YOUR USERNAME AND PASSWORD </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='EMAIL'
                        required/>
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password}
                        handleChange={this.handleChange} 
                        label='PASSWORD'
                        required/>
                    <div className='buttons'>
                        <CustomButton type='submit'> SIGN IN </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> SIGN IN WITH GOOGLE </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
};

export default SignIn;