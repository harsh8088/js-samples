const Encrypt = require("./encrypt");

const dataTd = {
  message: "Record found",
  status: true,
  otp_sent: false,
  is_pin_available: true,
  otp_token: "",
  pin_token: "=",
};
const secretKey = "";
const method = "POST"; // Adjust according to your request method
const url = "https://"; // Replace with your API endpoint
const expiry = "2024-01-29T06:54:06+00:00"; // Replace with the expiration time
const requestBody = JSON.stringify(dataTd);
const signature = new Encrypt().generateHMAC(
  secretKey,
  method,
  url,
  expiry,
  requestBody
);
console.log(signature);
