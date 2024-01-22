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
firstName_Input.required = true;  // Add the required attribute
studentForm.appendChild(firstName_Input);

// Create input for last name
const lastName_Input = createInput("last_name_info", "Enter your Last Name", "input_group");
lastName_Input.required = true;  // Add the required attribute
studentForm.appendChild(lastName_Input);

// TUID 
const TUID_Input = createInput("TUID_number", "Enter TUID", "input_group");
TUID_Input.required = true;  // Add the required attribute

// Use input event listener to check for numeric characters and limit to max 9 digits
TUID_Input.addEventListener("input", function (event) {
    const inputValue = event.target.value;

    // Remove non-numeric characters
    const numericValue = inputValue.replace(/[^0-9]/g, '');

    // Set the pattern attribute for exactly 9 digits
    TUID_Input.setAttribute("pattern", "\\b\\d{9}\\b");

    // Limit to 9 digits
    const limitedValue = numericValue.slice(0, 9);

    // Update the input value
    event.target.value = limitedValue;
});
studentForm.appendChild(TUID_Input);

// Email Address
const email_Input = createInput("email_Input", "Enter Email Address", "input_group");
email_Input.required = true;  // Add the required attribute
studentForm.appendChild(email_Input);

// Phone number
const phone_Input = createInput("phone_Input", "Enter Phone Number", "input_group");
phone_Input.required = true;  // Add the required attribute
studentForm.appendChild(phone_Input);

// Major
const major_Input = createInput("major_Input", "Enter Major", "input_group");
major_Input.required = true;  // Add the required attribute
studentForm.appendChild(major_Input);

// Expected Graduation Date
const graduation_Input = createInput("graduation_Input", "Enter Graduation Date", "input_group");
graduation_Input.required = true;  // Add the required attribute
studentForm.appendChild(graduation_Input);

// Is this student an Undergrad? 
const undergrad_input = document.createElement("select");
undergrad_input.required = true;  // Add the required attribute
undergrad_input.id = "undergrad_input";  // Add an ID for easier identification
let array = ["Are you an Undergrad?", "Yes", "No"];
// Create and append the options
for (let i = 0; i < array.length; i++) {
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
submitButton.id = "button";
studentForm.appendChild(submitButton);

// Add a submit event listener to the form
studentForm.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Create an object to store the form data
    const formData = {};

    // Iterate through form elements and store data in the object
    for (const input of studentForm.elements) {
        // Check if the element is an input field and has a value
        if (input.nodeName === "INPUT" || (input.nodeName === "SELECT") && input.value !== "") {
            formData[input.id] = input.value;
        }
    }

    // Convert the form data object to JSON
    const jsonData = JSON.stringify(formData, null, 2);

    // Save the JSON data to a file 
    saveJSONToFile(jsonData, "formData.json");

    // Optionally, you can reset the form after submission
    studentForm.reset();
});

function saveJSONToFile(jsonData, fileName) {
    // This is a simplified example. In a real-world scenario, you would need server-side code to handle file saving.

    // Create a file containing the JSON data
    const file = new Blob([jsonData], { type: "application/json" });

    // Create a link element
    const link = document.createElement("a");

    // Set the href attribute to a data URL representing the Blob
    link.href = URL.createObjectURL(file);

    // Set the download attribute with the desired file name
    link.download = fileName;

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click event on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}