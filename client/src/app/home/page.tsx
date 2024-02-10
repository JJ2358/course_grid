'use client';

import React from 'react';
import Link from 'next/link';
import Hero from './../components/hero'; // Adjust the import path as necessary
import homeImg from '../../../public/images/homeImg.jpg'; // Adjust the import path as necessary

const HomePage: React.FC = () => {
    // Assuming you have some state or context to check if a user is logged in
    // For demonstration purposes, this is hardcoded to true
    const isAuthenticated = true; // This should be replaced with actual authentication logic

    return (
        <>
            <nav className="container mx-auto p-8 flex justify-between items-center">
                <Link href="/home">Logo</Link>
                <div className="space-x-4">
                    {isAuthenticated ? (
                        <>
                            <Link href="/profile">Profile</Link> {/* Adjust as needed */}
                            <Link href="/settings">Settings</Link> {/* Adjust as needed */}
                            <Link href="/api/logout">Log Out</Link> {/* Adjust as needed for your logout functionality */}
                        </>
                    ) : (
                        // If not authenticated, though it should not happen for /home, provide a fallback
                        <Link href="/login">Login</Link>
                    )}
                </div>
            </nav>

            <Hero
              imgData={homeImg}
              imgAlt="A vibrant community engaging in activities"
              title="Welcome Back to Our Community!"
            />

            {/* Content specific to authenticated users */}
            <div className="container mx-auto p-8">
                <h2 className="text-xl font-bold">Dashboard</h2>
                <p>Welcome to your personalized dashboard. Here, you can manage your profile, settings, and more.</p>
                {/* Further content and links for authenticated users */}
            </div>
        </>
    );
};

export default HomePage;
