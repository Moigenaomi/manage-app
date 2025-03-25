import Link from 'next/link';
import { useSignIn } from '@clerk/nextjs';
import { useState } from 'react';
import { useRouter } from 'next/router';

const SignIn = () => {
    const { signIn, isLoaded } = useSignIn();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!isLoaded|| !signIn) {
            alert('Please try again');
            return;
        }
        try{
        await signIn.create({ identifier: email, password });
        router.push('/dashboard');
        }
        catch(error) {
            console.error("SignOn error",error);
            alert('Failed to sign in. Please check your credentials and try again.');
        }

    };

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" disabled={!isLoaded}>Sign In</button>
            </form>
            <Link href="/sign-up"> Don&apos;t have an account? Sign Up</Link>
            <Link href="/forgot-password">Forgot Password?</Link>
        </div>
    );
};

export default SignIn;
