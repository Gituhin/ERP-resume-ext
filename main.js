
const userid = document.getElementById("user_id");
userid.value = "<Your roll number>";

const pass = document.getElementById("password");
pass.value = "<Your password>";

setTimeout(() => {
    userid.blur()
}, 200);

setTimeout(() => {
    const ques = document.getElementById("question").innerText;
    console.log(ques)
    var secans = document.getElementById("answer")
    // Security Question 1
    if(ques=="<your question 1>") secans.value="<answer of question 1>"
    // Security Question 2
    else if(ques=="<your question 2>") secans.value = "<answer of question 2>"
    //Last Question (only answer needed)
    else secans.value = "<answer of question 3>"

}, 600);