
var firebase = require("firebase");
require("firebase/firestore");

var config = {

    apiKey: "AIzaSyBrrxktHTBX3wh151_w_rUrrU496Iipnow",
    authDomain: "rfid-6dd7b.firebaseapp.com",
    databaseURL: "https://rfid-6dd7b.firebaseio.com",
    projectId: "rfid-6dd7b",
    storageBucket: "rfid-6dd7b.appspot.com",
    messagingSenderId: "436581328451",
    appId: "1:436581328451:web:1503b330b95e1d5ed9d6f6",
    measurementId: "G-BSZ7XHC6CZ"
};

var fire = firebase.initializeApp(config);
module.exports = fire