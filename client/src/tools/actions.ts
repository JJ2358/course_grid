'use server';

import { redirect } from 'next/navigation';

import { hashPassword } from './DataManager';

export async function hashUserPassword(formState: { message: string }, formData: FormData) {

    const password = formData.get('password') as string;

    let hashed = hashPassword(password);

    return {
        message: hashed,
    }
}