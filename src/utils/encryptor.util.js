const CryptoJS = require('crypto-js');

const base64Decrypt = (data) => {
  return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(data));
}

const base64Encrypt = (data) => {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data));
}

module.exports = {base64Decrypt, base64Encrypt};
