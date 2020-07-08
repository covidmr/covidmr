import Firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.envREACT_APP_MEASUREMENT_ID
};

const app = Firebase.initializeApp(config);

export const firebaseConfig = app.database();

/**
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.envREACT_APP_MEASUREMENT_ID
};

const config = {
    apiKey: "AIzaSyBj2FhT4penbFGwR8CGNXCpqSE9xh2wNII",
    authDomain: "covidmr-ae4a3.firebaseapp.com",
    databaseURL: "https://covidmr-ae4a3.firebaseio.com",
    projectId: "covidmr-ae4a3",
    storageBucket: "covidmr-ae4a3.appspot.com",
    messagingSenderId: "923113069113",
    appId: "1:923113069113:web:4eef6da4b0cbcaf28bcbe8",
    measurementId: "G-7VSKL07YX1"
};
**/