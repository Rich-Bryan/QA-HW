// function to create input tags
function createInput(id, placeholder, className) {
    const input = document.createElement("input");
    input.id = id;
    input.placeholder = placeholder;
    input.classList.add(className);
    return input;
}

// select the id from the index.html file 
const container = document.querySelector('#container');

const content = document.createElement("div");
content.classList.add('content');
container.appendChild(content);
// content inside the div 
const heading = document.createElement('h1');
heading.textContent = 'Student Profile Data';
content.appendChild(heading);

// another div to store the student data 
const dataInfo = document.createElement("div");
dataInfo.classList.add("student_info");
container.appendChild(dataInfo);

// Create a form element
const studentForm = document.createElement("form");
studentForm.id = "form"
dataInfo.appendChild(studentForm);

// Create input for first name
const firstName_Input = createInput("first_name_info", "Enter your First Name", "input_group");
studentForm.appendChild(firstName_Input);

// Create input for last name
const lastName_Input = createInput("last_name_info", "Enter your Last Name", "input_group");
studentForm.appendChild(lastName_Input);

//TUID 
const TUID_Input = createInput("TUID_number", "Enter TUID", "input_group");
studentForm.appendChild(TUID_Input);

//Email Address
const email_Input = createInput("email_Input", "Enter Email Adress", "input_group");
studentForm.appendChild(email_Input);

//Phone number
const phone_Input = createInput("phone_Input", "Enter Phone Number", "input_group");
studentForm.appendChild(phone_Input);

//Major
const major_Input = createInput("major_Input", "Enter Major", "input_group");
studentForm.appendChild(major_Input);

//Expected Graduation Date
const graduation_Input = createInput("graduation_Input", "Enter Graduation Date", "input_group");
studentForm.appendChild(graduation_Input);


//Is this student an Undergrad? 
const undergrad_input = document.createElement("select");
let array = ["Are you a Undergrad?","Yes", "No"];
//Create and append the options
for(let i = 0; i < array.length; i ++){
    let option = document.createElement("option");
    // Set "disabled" and "selected" for the first option
    if (i === 0) {
        option.setAttribute("disabled", "disabled");
        option.setAttribute("selected", "selected");
    }
    option.value = array[i];
    option.text = array[i];
    undergrad_input.appendChild(option);
}
undergrad_input.classList.add("input_group");
studentForm.appendChild(undergrad_input);






// Create a submit button
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";
submitButton.id = "button"
studentForm.appendChild(submitButton);
