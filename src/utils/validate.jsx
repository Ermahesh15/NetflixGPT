export default function validate(email, password) {

  const isValidEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  if (!isValidEmail) {
    return "Please enter a valid email address.";
  }

  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(
      password.trim()
    );

  if (!isValidPassword) {
    return "Password must be at least 8 characters long and include uppercase, lowercase, number and special character.";
  }

  return null;
}