
const userid = document.getElementById("user_id");
userid.value = "19CE36007";

const pass = document.getElementById("password");
pass.value = "Babun#9211";

setTimeout(() => {
    userid.blur()
}, 200);

setTimeout(() => {
    const ques = document.getElementById("question").innerText;
    console.log(ques)
    var secans = document.getElementById("answer")
    // Security Question 1
    if(ques=="Favorite Sports") secans.value="Cricket"
    // Security Question 2
    else if(ques=="Favorite Fruit") secans.value = "Mango"
    //Last Question (only answer needed)
    else secans.value = "Gorakhpur"

}, 600);