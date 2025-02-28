class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateDetails(user) {
    try {
        if (!user.name) {
            throw new ValidationError("Name cannot be empty.");
        }

        if (user.age < 18) {
            throw new ValidationError("User must be at least 18 years old.");
        }

        if (!user.email || !user.email.includes("@")) {
            throw new ValidationError("Invalid email address.");
        }

        console.log("User details are valid.");
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error("Validation Error:", error.message);
        } else {
            console.error("Unexpected Error:", error);
        }
    } finally {
        console.log("Validation process completed.");
    }
}

// Example usage
const user1 = { name: "", age: 20, email: "user@example.com" };
const user2 = { name: "Alice", age: 17, email: "alice@example.com" };
const user3 = { name: "Bob", age: 25, email: "bobexample.com" };
const user4 = { name: "Charlie", age: 22, email: "charlie@example.com" };

validateDetails(user1); // Name error
validateDetails(user2); // Age error
validateDetails(user3); // Email error
validateDetails(user4); // Valid
