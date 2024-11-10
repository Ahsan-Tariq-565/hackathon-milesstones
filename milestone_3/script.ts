const from = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

/*handle form submission:
Step 1:*/
from.addEventListener('submit', (event: Event) =>{
   event.preventDefault(); 

//Step 2:
//collect input values from index.html giving by the user.
const name = (document.getElementById('name') as HTMLInputElement).value
const email = (document.getElementById('email') as HTMLInputElement).value
const phone = (document.getElementById('phone') as HTMLInputElement).value
const education = (document.getElementById('education') as HTMLInputElement).value
const experience = (document.getElementById('experience')as HTMLInputElement).value
const skills = (document.getElementById('skills') as HTMLInputElement).value



//Step 3
//Generate the resume and content dynamically

const resumeHTML = `
<h2>Resume</h2>
<h3>Personal Information:-</h3>
<p><b>Name:</b>${name}</p>
<p><b>Email:</b>${email}</p>
<p><b>Phone:</b>${phone}<b></p>


<h3>Education:-</h3>
<p>${education}</p>

<h3>Experience:-</h3>
<p>${experience}</p>

<h3>Skills:-</h3>
<p>${skills}</p>
`;

//Step 4
//*Display the generated resume

if(resumeDisplayElement) {
   resumeDisplayElement.innerHTML = resumeHTML;    
}else {
   console.error('The resume display element is missing')
}

});

