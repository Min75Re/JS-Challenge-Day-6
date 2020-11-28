const select = document.querySelector(".js-select"),
    selectTest = document.querySelector("select.js-select option[value=selection]"),
    Korea = document.querySelector("select.js-select option[value=Korea]"),
    Greece = document.querySelector("select.js-select option[value=Greece]"),
    Turkey = document.querySelector("select.js-select option[value=Turkey]"),
    Finland = document.querySelector("select.js-select option[value=Finland]");

const COUNTRY_LS = "currentCountry";

function selectCountry() {
    select.addEventListener("change", (event) => {
        if(event.target.value !== "selection"){
            localStorage.setItem(COUNTRY_LS, event.target.value);
        }
    });
    const currentCountry = localStorage.getItem(COUNTRY_LS);

    if(currentCountry === null) {
        const error = document.querySelector(".error");
        error.innerText = "Please choose your country";
    } else {
        switch(currentCountry) {
            case "Korea" : Korea.setAttribute("selected", null); break;
            case "Greece" : Greece.setAttribute("selected", null); break;
            case "Turkey" : Turkey.setAttribute("selected", null); break;
            case "Finland" : Finland.setAttribute("selected", null); break;
            default : selectTest.setAttribute("selected", null);
        }
    }
}

function init() {
    selectCountry();
}

init();