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

/* OnStart */
/* Add A Funtion In this function to Recieve mode from the server */
(() => {
    let data;
    /* Function Logic LogicHere */
    if (data != null) {

    } else {
        if (!window.matchMedia)
            ChangeColor("light");
    }

})();

/* To Show Display Msg */
async function DisplayMsg(cssClass, HeadingText, ContentText, timer, pos) {

    /* cssClass => 0 - sucess
                => 1 - danger
                => 2 - warning
                => 3 - info
    */

    /* 
        pos => t -top
            => b - bottom

    */

    let classes = ["bg-success-alert", "bg-danger-alert", "bg-warning-alert", "bg-info-alert"];

    if (pos == "t") {
        $("#AlertMsg").css("top", "0px");
        $("#AlertMsg").css("bottom", "");
    } else {
        $("#AlertMsg").css("bottom", "0px");
        $("#AlertMsg").css("top", "");
    }



    classes.forEach(element => {
        $("#AlertMsg").removeClass(element);
    });

    $("#AlertMsg").addClass("show " + classes[cssClass]);
    $("#DisplayAlertHeading").text(HeadingText);
    $("#DisplayAlertContent").text(ContentText);

    /* To Remove DisplayMsg After Sometime */
    if (timer != 0) {
        removeDisplayMsg(timer);
    }
}

var DisplayMsgTimer;
/* To Remove DisplayMsg */
async function removeDisplayMsg(x) {
    clearTimeout(DisplayMsgTimer);
    DisplayMsgTimer = setTimeout(() => {
        if ($("#AlertMsg").css("top") == "0px") {
            $("#AlertMsg").css("top", "-100px");
            $("#AlertMsg").css("bottom", "");
        } else {
            $("#AlertMsg").css("bottom", "-100px");
            $("#AlertMsg").css("top", "");
        }
        $("#AlertMsg").removeClass("show");
    }, x);
}


/* Number Input */
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
    var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });
});

/* show Or Hide Password by passing Id */
async function showHidePassword(idOfPasswordField) {
    var pass = document.getElementById(idOfPasswordField);
    var icon = document.getElementById("Hide");
    if (pass.type == "password") {
        pass.type = "text";
        icon.style.opacity = "0";
    } else {
        pass.type = "password";
        icon.style.opacity = "1";
    }
}


/* Dark Mode Function */
/* Add A Funtion to save mode in server */
async function ChangeColor(targetTheme) {

    /* To check for spelling errors */
    if (targetTheme == "dark") {
        targetTheme = "dark";
    } else {
        targetTheme = "light";
    }
    document.documentElement.setAttribute('data-theme', targetTheme)
}