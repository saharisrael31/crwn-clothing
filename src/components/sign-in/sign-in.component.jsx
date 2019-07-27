import React from 'react';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { signInWithGoogle, signInWithPassword } from '../../firebase/firebase.utils.js';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = ( event ) => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        signInWithPassword(this.state.email, this.state.password).catch((error)=>console.log(error));
        this.setState(
            {
                email: '',
                password: ''
            }
        );
    };
        

    render() {
        return(
        <div className='sign-in'>
            <h1 className='title' >I already have an account</h1>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                label='email'
                name='email'
                type='email' 
                value={this.state.email} 
                required
                handleChange={this.handleChange} />
                <FormInput 
                label='password'
                name='password'
                type='password' 
                value={this.state.password} 
                required
                handleChange={this.handleChange} />
                <div className='buttons' >
                    <CustomButton onSubmit={this.handleSubmit} type='submit' >Sign In</CustomButton>
                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn >Sign In with google</CustomButton>
                </div>
            </form>
        </div>
        );
    }
}
export default SignIn;