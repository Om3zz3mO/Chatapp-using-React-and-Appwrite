import { Client, Account, Databases } from 'appwrite';

export const API_ENDPOINT = "";
export const PROJECT_ID = "";
export const DATABASE_ID = "";
export const COLLECTION_ID_MESSAGES = "";

const client = new Client()
    .setEndpoint(API_ENDPOINT)
    .setProject(PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client)

export default client;