var resume = document.getElementById('resume');
var dedisplay = document.getElementById('display');
//handle form submission
resume.addEventListener('submit', function (event) {
    event.preventDefault();
    //collect input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    //generate resume
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>Personal Info</h3>\n<p><b>Name:</b> ".concat(name, "</P>\n\n<p><b>Phone Num:</b> ").concat(phone, "</P>\n<p><b>Email:</b> ").concat(email, "</P>\n<h3>Education:</h3>\n<p><b>").concat(education, "</b></p>\n\n<h3>Skills:</h3>\n<p><b>").concat(skills, "</b></p>\n\n<h3>Experiece:</h3>\n<p><b>").concat(experience, "</b></p>\n");
    //display
    if (dedisplay) {
        dedisplay.innerHTML = resumeHTML;
    }
    else {
        console.error("display element missing");
    }
});
