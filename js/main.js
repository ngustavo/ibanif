import { getIBAN, getNIF } from "./ibanif.js";

const handleIBAN = () => {
    const ibans = Array.from(Array(10), () => getIBAN());
    const list = ibans.map(iban => `<p>${iban}</p>`).join("");
    document.querySelector("#iban_out").innerHTML = list;
};

const handleNIF1 = () => {
    const nifs = Array.from(Array(10), () => getNIF());
    const list = nifs.map(nif => `<p>${nif}</p>`).join("");
    document.querySelector("#nif1_out").innerHTML = list;
};

const handleNIF5 = () => {
    const nifs = Array.from(Array(10), () => getNIF(.5, .6));
    const list = nifs.map(nif => `<p>${nif}</p>`).join("");
    document.querySelector("#nif5_out").innerHTML = list;
};

document.querySelector("#iban_gen").addEventListener("click", handleIBAN);
document.querySelector("#nif1_gen").addEventListener("click", handleNIF1);
document.querySelector("#nif5_gen").addEventListener("click", handleNIF5);

handleIBAN();
handleNIF1();
handleNIF5();