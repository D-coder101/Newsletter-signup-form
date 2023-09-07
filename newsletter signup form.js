var output = document.getElementById("result");

function validate() {
    
    let input = document.getElementById("mail-input").value;
    let regex = new RegExp(/\S+@\S+\.\S+/);
    let isValid = regex.test(input);

    //TESTING FOR VALID INPUT
    if (isValid) {    
        document.getElementById("News-container").style.display = "none";
        document.getElementById("success-msg").style.display = "block";
        var getUser = document.getElementById("user");
        getUser.innerHTML = input;
    } else {
        output.innerHTML = "Valid email required";
        document.getElementById("mail-input").style.backgroundColor = "lightpink";
        document.getElementById("mail-input").style.border = " 1px solid rgb(247, 27, 27)";
    }
}

//Closing success Alert
var dismiss = document.getElementById("succ-btn")
dismiss.addEventListener("click",function() {
    document.getElementById("success-msg").style.display = "none";
})
