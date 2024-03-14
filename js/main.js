import { getIBAN, getNIF } from "./ibanif.js";

document.querySelector("#iban_gen").addEventListener("click", () => {
    const ibans = Array.from(Array(10), () => getIBAN());
    const list = ibans.map(iban => `<p>${iban}</p>`).join("");
    document.querySelector("#iban_out").innerHTML = list;
});

document.querySelector("#nif1_gen").addEventListener("click", () => {
    const nifs = Array.from(Array(10), () => getNIF());
    const list = nifs.map(nif => `<p>${nif}</p>`).join("");
    document.querySelector("#nif1_out").innerHTML = list;
});

document.querySelector("#nif5_gen").addEventListener("click", () => {
    const nifs = Array.from(Array(10), () => getNIF(.5, .6));
    const list = nifs.map(nif => `<p>${nif}</p>`).join("");
    document.querySelector("#nif5_out").innerHTML = list;
});