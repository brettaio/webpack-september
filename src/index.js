import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import _ from 'lodash';
import './style.scss';

function createUI() {
  const appContainer = document.createElement('div');
  appContainer.classList.add('app-container'); // Apply CSS styles as needed

  const header = document.createElement('header');
  header.classList.add('app-header'); // Apply CSS styles as needed
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = 'bretta.io'; // Set the title text
  header.appendChild(headerTitle);

  const content = document.createElement('main');
  content.classList.add('app-content'); // Apply CSS styles as needed
  const welcomeMessage = document.createElement('p');
  welcomeMessage.textContent = 'Welcome to my app!'; // Add a welcome message
  content.appendChild(welcomeMessage);

  const signInButton = document.createElement('button');
  signInButton.textContent = 'Sign In'; // Set button text
  signInButton.classList.add('btn', 'btn-primary'); // Apply CSS styles as needed
  signInButton.addEventListener('click', () => {
    // Handle the sign-in click event, e.g., trigger Firebase authentication
  });
  content.appendChild(signInButton);

  const footer = document.createElement('footer');
  footer.classList.add('app-footer'); // Apply CSS styles as needed
  const footerText = document.createElement('p');
  footerText.textContent = '© 2023 My Awesome App'; // Add footer text
  footer.appendChild(footerText);

  appContainer.appendChild(header);
  appContainer.appendChild(content);
  appContainer.appendChild(footer);

  return appContainer;
}

function component() {
  const element = document.createElement('div');

  // Load Firebase configuration from environment variables
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

  const appElement = createUI();

  element.appendChild(appElement);

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
