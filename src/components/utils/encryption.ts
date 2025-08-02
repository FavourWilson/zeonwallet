import CryptoJS from "crypto-js";

export const encryptData = (data: string, password: string): string => {
    return CryptoJS.AES.encrypt(data, password).toString();
};

export const decryptData = (ciphertext: string, password: string): string => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, password);
    return bytes.toString(CryptoJS.enc.Utf8);
};
