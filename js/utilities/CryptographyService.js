function EncryptNumber(num, publicKey) {
    let d = publicKey[0];
    let n = publicKey[1];
    let encryptedNumber = fastModularExponentiation(BigInt(num), BigInt(d), BigInt(n));

    return encryptedNumber;
}

function DecryptNumber(encryptedNumber, privateKey) {
    let e = privateKey[0];
    let n = privateKey[1];
    let decryptedNumber = fastModularExponentiation(BigInt(encryptedNumber), BigInt(e), BigInt(n));

    return parseInt(decryptedNumber);
}