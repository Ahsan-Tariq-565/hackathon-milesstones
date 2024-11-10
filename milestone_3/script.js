var from = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
/*handle form submission:
Step 1:*/
from.addEventListener('submit', function (event) {
    event.preventDefault();
    //Step 2:
    //collect input values from index.html giving by the user.
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Step 3
    //Generate the resume and content dynamically
    var resumeHTML = "\n<h2>Resume</h2>\n<h3>Personal Information:-</h3>\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>Phone:</b>").concat(phone, "<b></p>\n\n\n<h3>Education:-</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience:-</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills:-</h3>\n<p>").concat(skills, "</p>\n");
    //Step 4
    //*Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
