/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com", "lh3.googleusercontent.com"],
  },
  env: {
    FIREBASE_apiKey: "AIzaSyD3y87uRSYF-QbZ-DVYyPq_wHRrCn4dhGQ",
    FIREBASE_authDomain: "everything-shivpuri-c7a4f.firebaseapp.com",
    FIREBASE_projectId: "everything-shivpuri-c7a4f",
    FIREBASE_storageBucket: "everything-shivpuri-c7a4f.appspot.com",
    FIREBASE_messagingSenderId: "1027804056854",
    FIREBASE_appId: "1:1027804056854:web:0995f75e3a387b1c83d437",

    OPEN_WEATHER: "dd96dd6f7380ae41ed9106d253aecb4e", 
  },
};

module.exports = nextConfig;
