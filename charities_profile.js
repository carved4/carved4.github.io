document.addEventListener("DOMContentLoaded", function() {
    const volunteerBtn = document.getElementById("volunteerBtn");
    const volunteerForm = document.getElementById("volunteerForm");
    const additionalDetails = document.getElementById("additionalInfo");
    const submitButton = document.getElementById("volunteerFormElement").querySelector("input[type='submit']");

    // displays volunteer form on button click
    volunteerBtn.addEventListener("click", function() {
        volunteerForm.style.display = "block";
    });

    // displays additional details on hover
    additionalDetails.addEventListener("mouseover", function() {
        additionalDetails.textContent = "Additional charity details: This charity was founded by John Smith.";
    });

    // reverts back to original content when mouse moves out
    additionalDetails.addEventListener("mouseout", function() {
        additionalDetails.textContent = "Hover over me for more details!";
    });

    // hover effect for volunteer button
    volunteerBtn.addEventListener("mouseover", function() {
        volunteerBtn.style.backgroundColor = "#ffcc00";
    });

    volunteerBtn.addEventListener("mouseout", function() {
        volunteerBtn.style.backgroundColor = ""; // Reset to default
    });

    // confirmation box when hovering over submit button
    submitButton.addEventListener("mouseover", function() {
        if (confirm("Are you sure you want to submit?")) {
            // Proceed with submission
        } else {
            // Cancel submission
        }
    });
});
