import { useFormState } from 'react-dom';

import Link from "next/link";



export default function LoginPage() {

    return (
        <div className="h-screen">
            <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8 h-[15vh]">
                <Link href="/" className="font-bold text-3xl">Logo</Link>
                <div className="space-x-8 text-xl">
                    <Link href="/register">Register</Link>
                </div>
            </nav>

            <main className="flex justify-center align-middle h-[85vh] bg-slate-800">
                <form className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-700 self-center" method="POST">
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-3xl font-bold leading-7 text-gray-900">Login</h2>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                                    <div className="mt-2">
                                        <input type="email" name="email" id="email" autoComplete="Email address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                    <div className="mt-2">
                                        <input id="password" name="password" type="password" autoComplete="Password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center flex-col gap-y-6">
                        <button type="submit" className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 w-40">Login</button>
                        <Link href="/register" className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 w-40 text-center">or Sign Up</Link>
                        <Link href="/" className="text-blue-700 font-bold hover:text-blue-500 text-xs">Forgot your password?</Link>
                    </div>
                </form>
            </main>


        </div>
    )

}