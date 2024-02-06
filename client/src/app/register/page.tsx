'use client';

import Link from "next/link";


import { useState, useEffect } from "react";



export default function RegisterPage() {

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');







    return (
        <div className="h-screen">
            <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8 h-[15vh]">
                <Link href="/" className="font-bold text-3xl">Logo</Link>
                <div className="space-x-8 text-xl">
                    <Link href="/login">Login</Link>
                </div>
            </nav>

            <main className="flex justify-center align-middle p-10 bg-slate-800">
                <form className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-700 self-center sm:w-2/5 w-3/4" method="POST">
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-3xl font-bold leading-7 text-gray-900">Register</h2>

                            <div className="mt-10 flex flex-col ">
                                <div className="">
                                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                    <div className="mt-2">
                                        <input type="text" name="firstName" id="firstName" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"></input>
                                    </div>
                                </div>

                                <div className="">
                                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                    <div className="mt-2">
                                        <input type="text" name="lastName" id="lastName" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"></input>
                                    </div>
                                </div>

                                <div className="">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                                    <div className="mt-2">
                                        <input type="email" name="email" id="email" autoComplete="User name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"></input>
                                    </div>
                                </div>

                                <div className="">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                    <div className="mt-2">
                                        <input id="password" name="password" type="password" autoComplete="Password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"></input>
                                    </div>
                                </div>


                                <div className="">
                                    <label htmlFor="validatePass" className="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
                                    <div className="mt-2">
                                        <input id="validatePass" type="password" autoComplete="Password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"></input>
                                    </div>
                                </div>

                            </div>


                            <div className="mt-10 items-center flex-col">
                                <button type="submit" className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 w-40 pl-2">Register</button>
                            </div>
                        </div>
                    </div>

                </form>

            </main>
        </div>
    );
}