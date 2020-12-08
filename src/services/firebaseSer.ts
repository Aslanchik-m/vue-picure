import firebase from "firebase/app";
require("firebase/firestore");

// Initialize firebaseApp
export const firebaseConfig = {
  apiKey: "AIzaSyAxCVhU_s-5Fe9FJq5K5x1UDPci6tsfN-s",
  authDomain: "epicure-c3b74.firebaseapp.com",
  databaseURL: "https://epicure-c3b74.firebaseio.com",
  projectId: "epicure-c3b74",
  storageBucket: "epicure-c3b74.appspot.com",
  messagingSenderId: "461420341264",
  appId: "1:461420341264:web:c86dcbe318e0513b008295"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
// Fetch all restaurants
export const fetchRestaurants = () => {
  return db.collection("restaurants").get();
};
// Fetch all restaurants
export const fetchPopularRestaurants = () => {
  return db
    .collection("restaurants")
    .where("favorites", ">", 40)
    .get();
};
// Fetch a single restaurant
export const fetchRestaurant = (restId: string) => {
  return db
    .collection("restaurants")
    .doc(restId)
    .get();
};
// Fetch all dishes
export const fetchDishes = () => {
  return db.collection("dishes").get();
};
// Fetch only three first dishes for signature dishes
export const fetchSignatureDishes = () => {
  return db
    .collection("dishes")
    .limit(3)
    .get();
};
// Fetch all Chefs
export const fetchChefs = () => {
  return db.collection("chefs").get();
};
// Search restaurants
export const searchRestaurants = (param: string) => {
  return db
    .collection("restaurants")
    .where("name", ">=", param)
    .where("name", "<=", param + "\uf8ff")
    .get();
};
