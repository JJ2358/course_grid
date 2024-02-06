'use server';

import { Accounts } from "./data.model";
import { Collection, InsertOneResult, MongoClient } from "mongodb";
import sanitizeHtml from 'sanitize-html';

import { redirect } from "next/navigation";

import { hashPasswordBack } from "./DataManager";

// MongoDB constants
const MONGO_URL: string = "mongodb://mongo:27017/";
const MONGO_DB_NAME: string = "dbGrids";
const MONGO_COLLECTION_ACCOUNT: string = "accounts";



export async function createNewUser(formState: { message: string | null }, formData: FormData) {

    let mongoClient: MongoClient = new MongoClient(MONGO_URL);

    const password = sanitizeHtml(formData.get('password') as string);
    const lastName = sanitizeHtml(formData.get('lastName') as string);
    const firstName = sanitizeHtml(formData.get('firstName') as string);
    const email = sanitizeHtml(formData.get('email') as string);
    const validatePass = sanitizeHtml(formData.get('validatePass') as string);

    if (validatePass === password) {
        // const hashedPassword = await hashPasswordBack(password);

        try {

            await mongoClient.connect();

            const accountsCollection = mongoClient.db(MONGO_DB_NAME).collection<Accounts>(MONGO_COLLECTION_ACCOUNT);

            let result: InsertOneResult = await accountsCollection.insertOne({
                _id: email,
                firstName: firstName,
                lastName: lastName,
                password: password,
            });
        } catch (error: any) {
            console.error("Error in creating your account", error.message);
            throw error;
        } finally {
            await mongoClient.close();
        }

        redirect('/');

    } else {
        return { message: "Passwords don't match" };
    }

}

export async function loginUser(formState: { message: string | null }, formData: FormData) {
    //Steps

    //get user and password from the FORM and sanitize them

    //connect to the DB

    //try block with functionality

    //since the user is the _id, we will need to check if password from associated user in the DB matches the one provided in the form

    //if matches: redirect to user's homepage

    //if it doesn't match, show a message of invalid user or password

}