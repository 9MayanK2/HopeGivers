import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import Button from '../ui/Button'
import BackToLogin from '../ui/BackToLogin'
import { FaFingerprint } from "react-icons/fa";

const VerifyOtp = () => {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);

    const inputRef = [ref1, ref2, ref3, ref4, ref5, ref6];

    const [opt1, setOpt1] = useState('');
    const [opt2, setOpt2] = useState('');
    const [opt3, setOpt3] = useState('');
    const [opt4, setOpt4] = useState('');
    const [opt5, setOpt5] = useState('');
    const [opt6, setOpt6] = useState('');

    const otpArray = [opt1, opt2, opt3, opt4, opt5, opt6];

    useEffect(() => {

        if (ref1.current) {
            ref1.current.focus();
        }
    }, []);


    const inputChange = (e, location) => {
        if (location < 5 && e.target.value){
            inputRef[location + 1].current.focus();
        }
        otp
     };

    const submitHandler = (e) => { 
        e.preventDefault();
    }

    return (
        <div className='auth_main'>
            <div className='auth_left'>
                {/* You can add an image or any other content here */}
            </div>
            <div className='auth_right'>
                <form onSubmit={submitHandler}>
                    <div className="auth_container">
                        <div className='auth_header'>
                            <FaFingerprint />
                            <p className='auth_heading'>Verify OTP</p>
                            <p className='auth_title'>Enter the OTP sent to your email</p>
                        </div>
                        <div className='auth_item'>
                            <label> OTP *</label>
                            <div className='otp_input_container'>
                                {inputRef.map((item, index) => {
                                    return (
                                        <input
                                            key={index}
                                            onChange={(e) => { inputChange(e, index) }}
                                            ref={item}
                                            onInput={(e) => {
                                                if (e.target.value.length > 1) {
                                                    e.target.value = e.target.value.slice(0, 1);
                                                }
                                            }} 
                                            type='number' 
                                            className='ui_input otp_input' />
                                    )
                                })}

                            </div>
                        </div>
                        <div className='auth_action'>
                            <Button>Verify</Button>
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

export default VerifyOtp
