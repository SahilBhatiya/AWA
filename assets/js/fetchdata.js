(() => {
    firebase.database().ref("Customers").once('value', function(snapshot) {
        let k = 1;
        snapshot.forEach(function(ChildSnapshot) {
            document.body.innerHTML += "<hr>";
            ChildSnapshot.forEach(function(GrandChildSnapshot) {
                const val = GrandChildSnapshot.val();
                document.body.innerHTML += "ID : " + GrandChildSnapshot.val().ID + "<br>";
                for (const [key, value] of Object.entries(val)) {
                    document.body.innerHTML += `${key}: ${value} <br>`;
                }
                document.body.innerHTML += "<br>";
            })
            document.body.innerHTML += "<br>";
        });
    });
})();