const yes = document.getElementById("yes");
const Esewa = document.getElementById("Esewa");
const Khalti = document.getElementById("Khalti");
const IMEI_Pay = document.getElementById("IMEI_Pay");
const mysubmit = document.getElementById("mysubmit");
const webresult = document.getElementById("webresult");
const payresult = document.getElementById("payresult");
const submit = document.getElementById("submit");

submit.onclick = function () {
    if (yes.checked) {
        webresult.textContent = `Thank you for liking my website!!!`
    }
    else {
        webresult.textContent = `I will improve my website in future sorry for disappointing you!!!`
    }

}
mysubmit.onclick = function () {
    if (Esewa.checked) {
        payresult.textContent = `You are paying with Esewa!!!`
    }
    else if (Khalti.checked) {
        payresult.textContent = `You are paying with Khalti!!!`
    }
    else if (IMEI_Pay.checked) {
        payresult.textContent = `You are paying with IMEI Pay!!!`
    }
    else {
        payresult.textContent = `Please select payment method!!!`
    }
}