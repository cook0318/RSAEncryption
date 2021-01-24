function GenerateKeys() {
    var keys = new KeyGenerator();
    ShowKeyDataInTable(keys);
}

function ShowKeyDataInTable(keys) {
    $('#P').html(keys.P);
    $('#Q').html(keys.Q);
    $('#N').html(keys.N);
    $('#Phi').html(keys.Phi);
    $('#FactorsN').html(keys.FactorsOfN.join());
    $('#FactorsPhi').html(keys.FactorsOfPhi.join());
    $('#E').html(keys.EncryptionNumber);
    $('#D').html(keys.DecryptionNumber);

    $('#PiKey').html(keys.PrivateKey.join());
    $('#PuKey').html(keys.PublicKey.join());
}

function EncryptUserInput(){
    let input = $('#rawInput').val();
    let d = $('#privateKeyD').val();
    let n = $('#privateKeyN').val();
    let result = $('#encryptedResult');
    let key = [d,n];

    let encryptedText = EncryptText(input, key);
    result.val(encryptedText);
}

function DecryptUserInput(){
    let input = $('#encryptedInput').val();
    let e = $('#publicKeyE').val();
    let n = $('#publicKeyN').val();
    let result = $('#decryptedResult');
    let key = [e,n];

    let decryptedText = DecryptText(input, key);
    result.val(decryptedText);
}

function ClearAllInputs(){
    $('#rawInput').val("");
    $('#privateKeyD').val("");
    $('#privateKeyN').val("");
    $('#encryptedResult').val("");
    $('#encryptedInput').val("");
    $('#publicKeyE').val("");
    $('#publicKeyN').val("");
    $('#decryptedResult').val("");
    $('#copyResult').val("");
}