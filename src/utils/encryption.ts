// src/utils/crypto.ts
import CryptoJS from "crypto-js";

// Encrypt text with a phrase
export const encryptData = (text: string, passphrase: string): string => {
  return CryptoJS.AES.encrypt(text, passphrase).toString();
};

// Decrypt text with the same phrase
export const decryptData = (ciphertext: string, passphrase: string): string => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  return bytes.toString(CryptoJS.enc.Utf8); // decode to utf8
};
