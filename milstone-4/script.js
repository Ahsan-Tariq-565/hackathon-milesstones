var from = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
/*handle form submission:(is function may main nay 3 steps may kaam kiya hy)
Step 1:*/
from.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload (event k parameter k zariye main may page reload k default function ko ruk diya)
    //Step 2:
    //collect input values from index.html giving by the user.
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    /*oper main nay sub say phelay 1 function banaya, or form submission k event control kiya, Then jo data values humay
    user nay html ki file k through di hy wo humany yaha "varibles" may save karwai , or apnay next step3 ki taraf bhar gae*/
    //Step 3
    /*Generate the resume and content dynamically:(step 3 may main nay jo data user say html file k through liye tha, os
    data ki main yaha formatting karaha ho, jis k liye phelay main nay 1  "resumeHTML" K nam ka variable bana or is variable may
     jo user-data main nay oper html ki file say import kiya tha, osay "template-literal" may rakh raha ho....
     simple "resume" ki formatting karha ho*/
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>Phone:</b>").concat(phone, "<b></p>\n\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience<h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
    //Step 4
    /*Display the generated resume:(ab jis data ki formatting main nay oper 3rd step may ki thi, osko finaly yaha display
    karwa raha ho...jis k liye main nay yaha 1 condition ka use kiya hy.
    
    condition simple hy k (agar "resumeDisplayElement(is varible may resume-display save hy) = resumeHTML(3rd step) k equal
    hy to display generate hojaga...or innerHTML 1 html (DOM-propety) hy..ye tab use hota hy jab hamay esa data ko acces karna ho
    jo dynamic ho(means data jo read and writeable ho)...or is resume may hamara data "dynamic" hy...hum is data
    may changes bhe karsakhty or phr AFTER changes dobara bhe display karwasakhty hy...isay ko kehty hy "Dynamic data"..  */
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
