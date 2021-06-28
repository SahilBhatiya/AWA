async function Login() {
    userEmail = document.getElementById("email").value;
    userPassword = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
        .then((userCredential) => {
            var user = userCredential.user;
        })
        .catch((error) => {

        });

}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.body.classList.remove("d-none");
    } else if (window.location.includes("Dashboard")) {
        DisplayMsg(1, "Error!", "Cannot Access", 0, "t");
    }
});