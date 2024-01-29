const crypto = require("crypto");

class Encrypt {
  generateHMAC(secretKey, method, url, expiry, requestBody) {
    const dataToSign = `${method}${url}${expiry}${requestBody}`;
    console.log(dataToSign);
    const hmac = crypto.createHmac("sha256", secretKey);
    hmac.update(dataToSign);
    return hmac.digest("hex");
  }
}

module.exports = Encrypt;
