var Keys = new KeyGenerator();

function EncryptText (text, key) {
    let encryptedText = "";
    for (i = 0; i < text.length; i++) {
        let char = text.charAt(i);
        let numericRepresentation = ConvertCharacterToNumber(char);
        let bigInt = EncryptNumber(numericRepresentation, key);
        let paddedHexValue = ConvertBigIntToHex(bigInt);
        encryptedText += paddedHexValue;
    }

    return encryptedText;
}

function DecryptText (encryptedText, key) {
    let decryptedText = "";
    let hexSlices = SplitHexString(encryptedText);
    hexSlices.forEach(hex => {
        let encryptedNumber = ConvertHexToInt(hex);
        let decryptedNumber = DecryptNumber(encryptedNumber, key);
        let decryptedLetter = ConvertNumberToCharacter(decryptedNumber);
        decryptedText += decryptedLetter;
    });

    return decryptedText;
}

