function convertChar(char, opt){
    const diff = Number(char) - Number(opt);
    return String.fromCharCode(96 + (diff));
}

function NSApuzzle(cipherText,key) {
    const chars = cipherText.match(/.{1,2}/g);
    const opts = key.match(/.{1,2}/g);
    return chars.map((e, i) => convertChar(e, opts[i])).join('');
}