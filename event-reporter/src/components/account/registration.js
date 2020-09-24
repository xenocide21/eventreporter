import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input'
import * as yup from 'yup'
import axios from 'axios'
import './register.css'

export default function Register(props) {
    const defaultState = {
        'username': '',
        'password': ''
    }

    const [formState, setFormState] = useState(defaultState)
    const [err, setErr] = useState(defaultState)
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const formSchema = yup.object().shape({
        'username': yup
            .string()
            .required('Please enter your username')
            .min(4, 'Please enter at least 4 characters'),
        'password': yup
            .string()
            .required('Please enter a password')
            .min(8, 'Password must be at least 8 characters long.')
    })

    useEffect(()=>{
        formSchema.isValid(formState).then(valid => setButtonDisabled(!valid))
        // eslint-disable-next-line
    }, [formState])

    const onSubmit = e => {
        e.preventDefault()
        console.log(formState)
        axios.post('http://localhost:3300/api/auth/register', formState)
            .then((res) => {
                console.log('Registration Submitted Successfully', res)
            })
            .catch((err) => console.log(err))
            setFormState(defaultState)
    }

    const validateChange = e => {
        e.persist()
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid =>
                setErr({
                    ...err,
                    [e.target.name]: ''
                })
            )
            .catch(err =>
                setErr({
                    ...err,
                    [e.target.name]: err.errors[0]
                })
            )
    }

    const inputChange = e => {
        const value = e.target.value
        setFormState({...formState, [e.target.name]: value})
        validateChange(e)
    }

    return (
        <form className="register-form" onSubmit={onSubmit}>
            <div className="welcome">
                <h1>Welcome</h1>
            </div>
            <div className="inputs">
                <Input
                    type="text"
                    name="username"
                    onChange={inputChange}
                    value={formState["username"]}
                    placeholder="username"
                />
                <Input
                    type="password"
                    name="password"
                    onChange={inputChange}
                    value={formState["password"]}
                    placeholder="Password"
                />
            </div>
            <div className="already-member">
                <p>Already a member?</p>
                <Link to="/login">Log In</Link>
            </div>
            <button id="registerBtn" disabled={buttonDisabled}>Sign up</button>
            {/*<div className='errors'>*/}
            {/*    /!* eslint-disable-next-line array-callback-return *!/*/}
            {/*    {Object.keys(err).map((key, i) => {*/}
            {/*        if (err[key].length > 0) {*/}
            {/*            return <p key={i}>{err[key]}</p>*/}
            {/*        }*/}
            {/*    })}*/}
            {/*</div>*/}
        </form>
    )
}
