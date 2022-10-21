var cvwindow;
cvwindow = window.open("", "_blank", "height=800,width=601");
var oogway = document.getElementById("myframe").contentDocument.documentElement //parent
// -----------------------------------------//---------------------------------------//


var element_table = oogway.querySelector("#profTab");
var content = oogway.querySelector('[title="Rich Text Editor, research_area"]').contentDocument.documentElement;
//var pub1_content = oogway.querySelector('[title="Rich Text Editor, subject16"]').contentDocument.documentElement;
var pub1_cont = element_table.querySelector("#subject16");

//Populating cv1 prefernce order, initially
var cv1_pref = [];
var cv11 = oogway.querySelector("#cv1_pref1");
var pref1_parent = cv11.parentElement;

function populate_pref1() {
    cv1_pref.splice(0, cv1_pref.length);
    for(let i=1; i<=14; i++) cv1_pref.push(oogway.querySelector("#cv1_pref"+i).selectedOptions[0].innerText);
    cv1_pref = cv1_pref.filter(item => item!=="Select");
}
populate_pref1();
pref1_parent.addEventListener('change', () => { populate_pref1() }, false);

// class standard_con{
//     constructor(title, description, incv1, incv2, incv3){
//         this.title = title;
//         this.description = description;
//         this.incv1 = incv1;
//         this.incv2 = incv2;
//         this.incv3 = incv3;
//     }
// }

var order_fields = ["Internships", "Projects", "Internships and Projects", "Academic Achievement", "Certification",
                "Training", "Experience", "Entrepreneurial Experience", "Competition/Conference",
                "Publication", "Position of Responsibilities", "Extra-Curricular Activities",
                "Skills and Expertise", "Coursework Information"];

var standard_fields = ["Internship", "Project", "Internship/Project", "Academic Achievement", "Certification",
                        "Training", "Experience", "Entrepreneurial Experience", "Competition/Conference",
                        "Publication", "Position of Responsibilities"]

var assigner = new Map();

for (let i=0; i<standard_fields.length; i++)
    assigner.set(standard_fields[i], []);

for(let i=7; i<=56; i++){
    var field_temp = oogway.querySelector("#standard"+i).selectedOptions[0].innerText;
    if(field_temp=="Select") continue;
    var title = oogway.querySelector("#university"+i).value;
    var description = oogway.querySelector("#subject"+i).innerText;
    var incv1 = !Boolean(oogway.querySelector('[name="'+i+'resume1"]').selectedIndex);
    var incv2 = !Boolean(oogway.querySelector('[name="'+i+'resume2"]').selectedIndex);
    var incv3 = !Boolean(oogway.querySelector('[name="'+i+'resume3"]').selectedIndex);
    assigner.get(field_temp).push({"title":title,
                                    "description":description,
                                    "incv1":incv1,
                                    "incv2":incv2,
                                    "incv3":incv3}
                                );
}
// important and handy methods asscociated and maybe useful here are map, filter.
console.log(assigner.get("Project")[0]);
function render_cv() {
    //mywindow.blur();
    var parent = document.getElementById("myframe").contentDocument.documentElement;
    var cw_info = parent.querySelector('[title="Rich Text Editor, research_area"]').contentDocument.documentElement;

    var writing_element = `<head>
                            <title>CV_generate</title>
                            <style>
                                p {margin:-1px}
                                .main_body { width:556px; border-width:1px; border-style:solid; padding-left:2px;
                                    font-family:Calibri; zoom:105%
                                }
                                .section-header{ text-align:center; font-family:Calibri; font-weight:bold;
                                    font-size:12px; border-width:1px; border-style:solid; background:#D9EBFE;
                                    border-radius:3px;
                                }
                            </style>
                            </head>
                            <div class="main_body">
                                <p><b>Your Name:</b></p>
                                <p>Tuhin Subhra De</p>
                                <p class="section-header">PUBLICATIONS</p>
                                ${pub1_cont.innerText}
                                <p>
                                ${assigner.get("Project")[0].title}
                                ${assigner.get("Project")[0].description}
                                </p>
                            </div>`;
    cvwindow.document.write(writing_element);
    cvwindow.document.close();
    cvwindow.blur();
}

var element_table_child = oogway.querySelector("#profTab").children[0];
render_cv();
element_table_child.addEventListener('change', () => {
    render_cv();
}, false);
