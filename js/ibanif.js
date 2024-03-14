const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const getNIF = (from = 0.1, to = 0.4) => {
    // 1xx xxx xxx - 3xx xxx xxx
    const random = getRandomInt(from * 100000000, to * 100000000 - 1).toString();
    let total = 0;

    for (let i = 0; i < 8; i++) {
        total += parseInt(random[i]) * (9 - i);
    }

    const checkDigit = (11 - (total % 11)) % 11;
    const nif = random + (checkDigit > 9 ? 0 : checkDigit);
    return nif;
};

const getIBAN = (prefix = "0007") => {
    // PT50 0007 xxx xxx xxx xxx xxx xx
    const min = 1e14;
    const max = 1e15 - 1;
    const random = `${prefix}${getRandomInt(min, max)}`;
    const nib1 = random.toString();

    let result = 0;
    for (let nibIndex = 0; nibIndex < 19; nibIndex++) {
        result = ((result + parseInt(nib1[nibIndex])) * 10) % 97;
    }

    const checkDigit = `${98 - ((result * 10) % 97)}`.padStart(2, "0");
    const nib = `${random}${checkDigit}`;

    return `PT50${nib}`;
};

export { getIBAN, getNIF };
