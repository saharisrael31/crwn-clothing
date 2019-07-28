import React from 'react';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName:'',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    };

    handleSubmit =async (event) => {
        event.preventDefault();
        const { email, displayName, password, confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert("password dont match!");
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName:'',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(error) {
            console.log(error);
        }
    };

    render() {
        const { displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h1 className='title' >I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                    label='name'
                    name='displayName'
                    type='text'
                    value={displayName}
                    handleChange={this.handleChange} />
                    <FormInput 
                    label='email'
                    name='email'
                    type='email'
                    value={email}
                    handleChange={this.handleChange} />
                    <FormInput 
                    label='password'
                    name='password'
                    type='password'
                    value={password}
                    handleChange={this.handleChange} />
                    <FormInput 
                    label='confirm Password'
                    name='confirmPassword'
                    type='password'
                    value={confirmPassword}
                    handleChange={this.handleChange} />
                    <div className='buttons'>
                    <CustomButton 
                    type='submit' >Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignUp;