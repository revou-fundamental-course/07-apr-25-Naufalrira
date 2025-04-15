let viewer = prompt("Halo, silahkan masukkan nama anda.");
    console.log(viewer);
    document.getElementById("viewer-name").innerHTML = viewer;

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
    const now = new Date();
    const formatted = now.toString(); //Customizeable
    document.getElementById('current-time').textContent = formatted;
}