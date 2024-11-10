const from = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

/*handle form submission:(is function may main nay 3 steps may kaam kiya hy)
Step 1:*/
from.addEventListener('submit', (event: Event) =>{//is anonyums function k parameter may main nay "Event" object ka use kiya hy, jis k zariye main nay "submission" ko(page-reload) default behavior, perform karnay say rukdiya hy.
   event.preventDefault(); //prevent page reload (event k parameter k zariye main may page reload k default function ko ruk diya)

//Step 2:
//collect input values from index.html giving by the user.
const name = (document.getElementById('name') as HTMLInputElement).value
const email = (document.getElementById('email') as HTMLInputElement).value
const phone = (document.getElementById('phone') as HTMLInputElement).value
const education = (document.getElementById('education') as HTMLInputElement).value
const experience = (document.getElementById('experience')as HTMLInputElement).value
const skills = (document.getElementById('skills') as HTMLInputElement).value

/*oper main nay sub say phelay 1 function banaya, or form submission k event control kiya, Then jo data values humay
user nay html ki file k through di hy wo humany yaha "varibles" may save karwai , or apnay next step3 ki taraf bhar gae*/ 

//Step 3
/*Generate the resume and content dynamically:(step 3 may main nay jo data user say html file k through liye tha, os 
data ki main yaha formatting karaha ho, jis k liye phelay main nay 1  "resumeHTML" K nam ka variable bana or is variable may
 jo user-data main nay oper html ki file say import kiya tha, osay "template-literal" may rakh raha ho.... 
 simple "resume" ki formatting karha ho*/

const resumeHTML = `
<h2>Resume</h2>
<h3>Personal Information</h3>
<p><b>Name:</b>${name}</p>
<p><b>Email:</b>${email}</p>
<p><b>Phone No:</b>${phone}</p>


<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
`;

//Step 4
/*Display the generated resume:(ab jis data ki formatting main nay oper 3rd step may ki thi, osko finaly yaha display
karwa raha ho...jis k liye main nay yaha 1 condition ka use kiya hy.

condition simple hy k (agar "resumeDisplayElement(is varible may resume-display save hy) = resumeHTML(3rd step) k equal
hy to display generate hojaga...or innerHTML 1 html (DOM-propety) hy..ye tab use hota hy jab hamay esa data ko acces karna ho
jo dynamic ho(means data jo read and writeable ho)...or is resume may hamara data "dynamic" hy...hum is data
may changes bhe karsakhty or phr AFTER changes dobara bhe display karwasakhty hy...isay ko kehty hy "Dynamic data"..  */

if(resumeDisplayElement) {
   resumeDisplayElement.innerHTML = resumeHTML;    
}else {
   console.error('The resume display element is missing')
}

});

