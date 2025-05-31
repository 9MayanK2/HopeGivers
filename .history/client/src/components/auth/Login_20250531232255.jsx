import React from 'react'
import './auth.css'
import Input from '../ui/Input'
import Button from '../ui/Button';
import { BiDonateBlood } from "react-icons/bi";
import { Link } from 'react-router-dom';
import HomePage from './HomePage';
import toast from 'react-hot-toast';
import apis from '../../utils/apis';
import LoadingButton from '../ui/LoadingButton';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading,setLoading] = React.useState(false);
    const navigate = useNavigate();

    const emailChange = (e) => {
        setEmail(e.target.value);
    };

    const passwordChange = (e) => {
        setPassword(e.target.value);
    };


    const submitHandler = async (e) => {
        e.preventDefault();
        // Handle login logic here
      
        try {
            setLoading(true);
            const response = await fetch(apis().loginUser, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();
            setLoading(false);
            if (!response.ok) {
                throw new Error(result?.message);
            }
            if (result?.status) {
                toast.success(result?.message);
                // Redirect to dashboard or home page after successful login
                localStorage.setItem('token', result.token);
                localStorage.setItem('profile', JSON.stringify(result)); 
                navigate('/home');
            }

            console.log(result);


        } catch (error) {
            toast.error(error.message);
        }


        console.log(email, password);
        // You can add your login API call here         
    }
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
                            <p className='auth_heading'>Welcome Back</p>
                            <p className='auth_title'>Login to continue</p>
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
                                <LoadingButton loading={loading} title="Login" />
                            </Button>
                        </div>
                        <div className='auth_options'>
                            <Link to='/register' className='auth_link'>Create new account?</Link>
                            <Link to='/forget/password' className='auth_link'>Forget password</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
