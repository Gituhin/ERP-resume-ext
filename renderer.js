
var mywindow = window.open("", "_blank",
"height=800,width=600");
mywindow.document.title = "CV_generate";

function write_element() {
    mywindow.blur();
    var address = document.getElementById("text_add");
    var skills = document.getElementById("text_skills");
    var writing_element = `     <title>CV_generate</title>
                                <hr color="red">
                                <p><b>Your Name:</b></p>
                                <p>Tuhin Subhra De</p>
                                <hr color="red">        
                                <p><b>Your Address</b></p>
                                <p>${address.value}</p>
                                <p><b>Your Skills</b></p>
                                <p>${skills.value}</p>
                                `;
    mywindow.document.write(writing_element);
    mywindow.document.close();
    //mywindow.blur();
}
write_element();
document.addEventListener('keyup', () => {
    write_element();
});
