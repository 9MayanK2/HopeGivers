import React from 'react'
import './auth.css'
import Input from '../ui/Input'
import { BiDonateBlood } from "react-icons/bi";
import Button from '../ui/Button';
import BackToLogin from '../ui/BackToLogin';
import HomePage from './HomePage';
import LoadingButton from '../ui/LoadingButton';
import apis from '../../utils/apis';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    const nameChange = (e) => {
        setName(e.target.value);
    };

    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        // Handle registration logic here

        try {
            setLoading(true);
            const response = await fetch(apis().registerUser, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password })
            });

            const result = await response.json();
            setLoading(false);
            if (!response.ok) {
                throw new Error(result?.message);
            }
            if (result?.status) {
                toast.success(result?.message);
                localStorage.setItem('token', result.token);
                localStorage.setItem('profile', JSON.stringify(result));
                // Store the token in local storage
                navigate('/home'); // Redirect to login page after successful registration
            }

            console.log(result);

        } catch (error) {
            toast.error(error.message);
        }
        console.log(name, email, password);


    };

    return (
        <div className='auth_main'>
            <div className='auth_left'>
                <HomePage />
            </div>
            <div className='auth_right'>
                <form onSubmit={submitHandler}>
                    <div className="auth_container">
                        <div className='auth_header'>
                            <BiDonateBlood />
                            <p className='auth_heading'>Welcome</p>
                            <p className='auth_title'>Create your account</p>
                        </div>
                        <div className='auth_item'>
                            <label> Name *</label>
                            <Input onChange={nameChange} type='text' required placeholder='enter your name' />
                        </div>
                        <div className='auth_item'>
                            <label> Email *</label>
                            <Input onChange={emailChange} type='email' required placeholder='enter your email' />
                        </div>
                        <div className='auth_item'>
                            <label> Password *</label>
                            <Input onChange={passwordChange} type='password' required placeholder='enter your password' />
                        </div>
                        <div className='auth_action'>
                            <Button>
                                <LoadingButton loading={loading} title="Register" />
                            </Button>
                        </div>
                        <div>
                            <BackToLogin />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
