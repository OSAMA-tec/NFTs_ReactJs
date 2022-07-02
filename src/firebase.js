import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyC-M77zSuzDyNd_vhNTqN0RS5rGDXVattw",
  authDomain: "nftswebsite.firebaseapp.com",
  projectId: "nftswebsite",
  storageBucket: "nftswebsite.appspot.com",
  messagingSenderId: "1000203415621",
  appId: "1:1000203415621:web:3c870b3c4a26b0d871b32c",
  measurementId: "G-HWH0S5JDZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


 export const storage=getStorage(app);