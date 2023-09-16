// Import dotenv to load environment variables from .env
require('dotenv').config();

// Import the specific Firebase services you need
import { initializeApp } from 'firebase/app';
import 'firebase/auth'; // Import other Firebase services you need
import _ from 'lodash';

// Import Firebase configuration from the separate file
import firebaseConfig from './firebase-config'; // Adjust the path as needed

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Your existing component function
function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
