const emailValue = "sampleEmail123@example.com";
const emailRegex =  /@.*\.com$/;

if (!emailRegex.test(emailValue)) {
    console.log("This is not a valid Email format!!! It should contain @ and end with .com");
} else {
    console.log("Email is valid!");
}