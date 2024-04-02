# Chatapp-using-React-and-Appwrite

Chatapp created Using Appwrite Cloud and React

### Getting Started

After cloning repo ensure you complete nessesary installations

```
$ npm install
$ npm run dev
```

Create a new `.env` folder and create the nessesary variables based on the `src/appwriteConfig.js` file. Appwrite setup will be covered in next step.

```js
//appwrite.Config.js
...
export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
export const PROJECT_ID = import.meta.env.VITE_PROJECT_ID
export const DATABASE_ID = import.meta.env.VITE_DATABASE_ID
export const COLLECTION_ID_MESSAGES = import.meta.env.VITE_COLLECTION_ID_MESSAGES

const client = new Client()
    .setEndpoint(API_ENDPOINT) 
    .setProject(PROJECT_ID);              
...
```

Create an account with Appwrite cloud.

In your appwrite console create a project and database.

1. Create a collection called "message" and add the following attributes:
    - user_id
    - username
    - body
2. From your `message` collection, go to the "settings" --> "Update Permissions" --> "+ Add Role" and select "Any". Give this user type "Create", "Read", "Update" and "Delete" permissions.

Change/Modify the env variables with thee env variables and run the development server.
