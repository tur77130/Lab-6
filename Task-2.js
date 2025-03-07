// Custom Error Class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

// Function to validate user details
function validateDetails(user) {
    if (!user.name) {
        throw new ValidationError("Name cannot be empty.");
    }
    if (user.age < 18) {
        throw new ValidationError("User must be at least 18 years old.");
    }
    if (!user.email || !user.email.includes("@")) {
        throw new ValidationError("Invalid email address.");
    }
    return "User details are valid.";
}

// Function to handle validation and error catching
function validateUser(user) {
    try {
        console.log(validateDetails(user));
    } catch (error) {
        console.error(`Validation Error: ${error.message}`);
    } finally {
        console.log("Validation attempt completed.\n");
    }
}

// Test Cases
const users = [
    { name: "", age: 20, email: "user@example.com" }, // Name error
    { name: "Alice", age: 17, email: "alice@example.com" }, // Age error
    { name: "Bob", age: 25, email: "bobexample.com" }, // Email error
    { name: "Charlie", age: 22, email: "charlie@example.com" } // Valid
];

// Run validation for all users
users.forEach(validateUser);
