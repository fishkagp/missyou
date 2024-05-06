function checkName() {
    var nameInput = document.getElementById("nameInput").value;
    var nameResult = document.getElementById("nameResult");
    
    if (nameInput.toLowerCase() === "fish") {
        nameResult.textContent = "Benar";
        showSlide("slide2");
    } else {
        nameResult.textContent = "Salah";
    }
}

function checkDuration() {
    var durationInput = document.getElementById("durationInput").value;
    var durationResult = document.getElementById("durationResult");
    
    if (durationInput.toLowerCase() === "10 bulan") {
        durationResult.textContent = "Benar";
        showSlide("slide3");
    } else {
        durationResult.textContent = "Salah";
    }
}

function sayang() {
    showSlide("slide4");
}

function kangen() {
    alert("Fish juga sangat kangen gusti");
    showSlide("slide5");
}

function pantek() {
    alert("PANTEK");
}

function showSlide(slideId) {
    var slides = document.querySelectorAll(".slide");
    slides.forEach(function(slide) {
        slide.style.display = "none";
    });
    document.getElementById(slideId).style.display = "block";
}
