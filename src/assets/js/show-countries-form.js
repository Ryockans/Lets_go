let countriesField = document.querySelector(".select__field.-choose");
let countriesButton = document.querySelector(".select__show.-choose");
let countriesDelete = document.querySelector(".select__delete.-choose");
let countriesList = document.querySelector(".select__country-list.choose-country");
let countriesIndex = 0;

function showCountries(n) {
    if (n !== 1){
        countriesList.classList.add("visually-hidden");
        countriesButton.classList.remove("-toggled");
        countriesDelete.classList.remove("-toggled");
        countriesField.classList.remove("-toggled");
        countriesIndex = 1;
    }
    if (n !== 0){
        countriesList.classList.remove("visually-hidden");
        countriesButton.classList.add("-toggled");
        countriesDelete.classList.add("-toggled");
        countriesField.classList.add("-toggled");
        countriesIndex = 0;
    }
}
