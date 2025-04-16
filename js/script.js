// Prompt name
let viewer = prompt("Halo, silahkan masukkan nama anda.");
    console.log(viewer);
    document.getElementById("viewer-name").innerHTML = viewer;

// Update current time
function updateCurrentTime() {
    const currentTimeElement = document.getElementById('current-time');
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    currentTimeElement.textContent = now.toLocaleDateString('en-US', options);
}

// Updating current time
setInterval(updateCurrentTime, 1000);
updateCurrentTime();

// Form validation
function validateForm() {
    const name = document.forms["message-form"]["nama"].value;
    const birthDate = document.forms["message-form"]["dob"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const message = document.forms["message-form"]["pesan"].value;

    if (name == "" || birthDate == "" || gender == "" || message == "") {
        alert("Tolong isi semua form.");
        return false;
    }

    setSenderUI(name, birthDate, gender, message);
    document.forms["message-form"].reset();

    return false;
}

function setSenderUI(name, birthDate, gender, message) {
    document.getElementById("sender-name").innerHTML = name;
    document.getElementById("sender-bday").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = message;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// smooth scroll nav
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
