function generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let email = '';
    for (let i = 0; i < 10; i++) {
      email += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    email += '@example.com'; // You can change the domain if needed
    return email;
  }
  
  // Example usage:
  const randomEmail = generateRandomEmail();
  console.log(randomEmail);


 module.exports = generateRandomEmail;