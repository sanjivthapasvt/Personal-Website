const yes = document.getElementById("yes");
const mysubmit = document.getElementById("mysubmit");
const webresult = document.getElementById("webresult");
const submit = document.getElementById("submit");

submit.onclick = function () {
    if (yes.checked) {
        webresult.textContent = `Thank you for liking my website!!!`
    }
    else {
        webresult.textContent = `I will improve my website in future sorry for disappointing you!!!`
    }

}
