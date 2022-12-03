var cvwindow;
cvwindow = window.open("", "_blank", "height=800,width=601");
var oogway = document.getElementById("myframe").contentDocument.documentElement //parent
// -----------------------------------------//---------------------------------------//


var element_table = oogway.querySelector("#profTab");
var course_info = oogway.querySelector('[title="Rich Text Editor, research_area"]').contentDocument.documentElement;
course_info = course_info.querySelector("body").innerHTML;

var skills_cv1 = oogway.querySelector('[title="Rich Text Editor, skill"]').contentDocument.documentElement;
skills_cv1 = skills_cv1.querySelector("body").innerHTML;

var eaa_cv1 = oogway.querySelector('[title="Rich Text Editor, eaa"]').contentDocument.documentElement;
eaa_cv1 = eaa_cv1.querySelector("body").innerHTML;
var xtras = new Map();
xtras.set("Extra-Curricular Activities", eaa_cv1);
xtras.set("Skills and Expertise", skills_cv1);
xtras.set("Coursework Information", course_info);

//Populating cv1 preference order, initially
var cv1_pref = []  // Stores preference order of elements for cv1
var pref1_parent = oogway.querySelector("#cv1_pref1").parentElement;

function populate_pref1() {
    cv1_pref.splice(0, cv1_pref.length);
    for (let i = 1; i <= 14; i++) cv1_pref.push(oogway.querySelector("#cv1_pref" + i).selectedOptions[0].innerText);
    cv1_pref = cv1_pref.filter(item => item !== "Select");
    cv1_pref;
}
populate_pref1();
pref1_parent.addEventListener('change', () => { populate_pref1() }, false);

var order_fields = ["Internships", "Projects", "Internships and Projects", "Academic Achievement", "Certification",
    "Training", "Experience", "Entrepreneurial Experience", "Competition/Conference",
    "Publication", "Position of Responsibilities", "Extra-Curricular Activities",
    "Skills and Expertise", "Coursework Information"];

var element_fields = ["Internship", "Project", "Internship/Project", "Academic Achievement", "Certification",
    "Training", "Experience", "Entrepreneurial Experience", "Competition/Conference",
    "Publication", "Position of Responsibilities"]

var assigner = new Map();
for (let i = 0; i < element_fields.length; i++)
    assigner.set(element_fields[i], []); //map of objects for element holders

for (let i = 7; i <= 56; i++) {
    var field_temp = oogway.querySelector("#standard" + i).selectedOptions[0].innerText;
    if (field_temp == "Select") continue;
    var title = oogway.querySelector("#university" + i).value;
    var description = oogway.querySelector("#subject" + i).innerText;
    var incv1 = !Boolean(oogway.querySelector('[name="' + i + 'resume1"]').selectedIndex);
    var incv2 = !Boolean(oogway.querySelector('[name="' + i + 'resume2"]').selectedIndex);
    var incv3 = !Boolean(oogway.querySelector('[name="' + i + 'resume3"]').selectedIndex);
    assigner.get(field_temp).push({
        "title": title,
        "description": description,
        "incv1": incv1,
        "incv2": incv2,
        "incv3": incv3
    }
    );
}
// important and handy methods asscociated and maybe useful here are map, filter.

function display_content_cv1(element_field) {
    var size = assigner.get(element_field).length;
    var return_object = ``;
    for (let i = 0; i < size; i++) {
        var element = assigner.get(element_field)[i];
        if (element.incv1) {
            return_object += `<pre>${element.title}</pre><p>${element.description}</p>`;
        };
    }
    return return_object;
};

function display_byor_cv1() {
    var return_object = ``;
    for(let i=0; i<cv1_pref.length; i++){
        var oem = cv1_pref[i];
        var idx_in_order_fields = order_fields.indexOf(oem);
        return_object += `<p class="section-header">${oem.toUpperCase()}</p>`;
        if(idx_in_order_fields>=element_fields.length){
            return_object += xtras.get(oem);
        }
        else{
            var element_field = element_fields[idx_in_order_fields];
            return_object += display_content_cv1(element_field);
        }
    };
    return return_object;
}

function render_cv() {
    //mywindow.blur();
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
                                pre {
                                    display:block; font-family: Calibri; white-space: pre;
                                    margin: 0em 0em 0em 0em; font-size:9.8px; font-weight:bolder
                                }
                            </style>
                            </head>
                            <div class="main_body">
                                <p><b>Your Name:</b></p>
                                <p>Tuhin Subhra De</p>
                                ${display_byor_cv1()}
                            </div>`;
    cvwindow.document.write(writing_element);
    cvwindow.document.close();
    cvwindow.blur();
};

var element_table_child = element_table.querySelectorAll("profTab");
render_cv();
element_table_child.addEventListener('change', () => {
    render_cv();
}, false);
