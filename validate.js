function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    
    if (name.length < 5) {
        alert("Name must be at least 5 characters long.");
        return false; // Prevent form submission
    }
    
    if (!email.includes("@") || email.length < 6) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }
    
    return true; // Allow form submission
}
