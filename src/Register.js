import React, { useState } from 'react';
import { Page } from 'govuk-react';
import TopNav from '@govuk-react/top-nav';
import { Button } from 'govuk-react';
import { Link } from 'react-router-dom';
import './App.css';
import RegInput from './Components/RegInput';
import { createContext } from 'react';

export const CurrentContext = createContext({
    email: '',
    setEmail: () => { },
    password: '',
    setPassword: () => { },
    NHS: '',
    setNHS: () => { },
    gender: '',
    setGender: () => { },
    DoB: '',
    setDoB: () => { }
});

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [NHS, setNHS] = useState('');
    const [gender, setGender] = useState('');
    const [DoB, setDoB] = useState('');
    return (
        <CurrentContext.Provider value={{ email, setEmail, password, setPassword, NHS, setNHS, gender, setGender, DoB, setDoB }}>
            <Page header={<TopNav company={<TopNav.Anchor href="/" ><TopNav.IconTitle>GP Surgery</TopNav.IconTitle></TopNav.Anchor>}
                serviceTitle={<TopNav.NavLink href="/" >Registration</TopNav.NavLink>} />}>

                <RegInput />
                <div>
                    <Link to="/registeralt">
                        <Button>Register with postcode</Button>
                    </Link>
                </div>

            </Page>
        </CurrentContext.Provider>
    );
}

export default Register;

