import Link from 'next/link';

const Welcome = () => {
    return (
        <div>
            <h1>Welcome to Smart Grocery Management</h1>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/sign-up">Sign Up</Link>
        </div>
    );
};

export default Welcome;