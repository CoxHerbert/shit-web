import CryptoJS from 'crypto-js';

const SECRET_KEY = 'Caghd9Um8MNHVI1RRX3RhA=='; // Base64编码密钥
const IV = 'ThisIsAnIV123456'; // 16字节IV

const CryptoUtils = {
    /**
     * 加密方法
     * @param {string} txt 明文字符串
     * @returns {string} 加密后的Base64字符串
     */
    encryptTxt(txt) {
        const key = CryptoJS.enc.Base64.parse(SECRET_KEY); // 密钥Base64解析
        const iv = CryptoJS.enc.Utf8.parse(IV); // IV需要转换成Utf8格式
        const encrypted = CryptoJS.AES.encrypt(txt, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        return encrypted.toString(); // 返回加密后的Base64字符串
    },

    /**
     * 解密方法
     * @param {string} txt 加密后的Base64字符串
     * @returns {string} 解密后的明文字符串
     */
    decryptTxt(txt) {
        const key = CryptoJS.enc.Base64.parse(SECRET_KEY); // 密钥Base64解析
        const iv = CryptoJS.enc.Utf8.parse(IV); // IV需要转换成Utf8格式
        const decrypted = CryptoJS.AES.decrypt(txt, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        return decrypted.toString(CryptoJS.enc.Utf8); // 返回解密后的明文字符串
    },
};

export default CryptoUtils;
