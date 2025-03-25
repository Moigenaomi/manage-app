import Link from 'next/link';
import { useSignUp } from '@clerk/nextjs';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SignUp = () => {
    const { signUp, isLoaded } = useSignUp();
    const [name, setName] = useState('');
    const [emailAddress, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!signUp){
            alert('please sign up');
            return;
        }
        if (password === confirmPassword) {
            await signUp.create({ emailAddress, password, firstName: name });
            router.push('/sign-in');
        } else {
            alert("Passwords do not match!");
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type="submit" disabled={!isLoaded}>Sign Up</button>
            </form>
            <Link href="/sign-in">Already have an account? Sign In</Link>
        </div>
    );
};

export default SignUp;