let countriesButton = document.querySelector(".countries-filter__button ");
let countriesList = document.querySelector(".choose-country");
let countriesBottomButton = document.querySelector(".countries-filter__close");
let countriesIndex = 0;

function showCountries(n) {
    if (n !== 1){
        countriesList.classList.remove("-toggled");
        countriesButton.classList.remove("-toggled");
        countriesBottomButton.classList.remove("-toggled");
        countriesIndex = 1;
    }
    if (n !== 0){
        countriesList.classList.add("-toggled");
        countriesButton.classList.add("-toggled");
        countriesBottomButton.classList.add("-toggled");
        countriesIndex = 0;
    }
}