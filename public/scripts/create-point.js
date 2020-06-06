function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then((res) => { return res.json() })
        .then((states) => {
            for (state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }

        })

}
populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = ""
    citySelect.disabled = true
    fetch(url)
        .then((res) => { return res.json() })
        .then((cities) => {

            for (city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
            citySelect.disabled = false
        })

    citySelect.value.sort((a, b) => a.value < b.value ? -1 : a.value > b.value ? 1 : 0) //sort cities in alphabetical order
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

// items collected
const itemsToColect = document.querySelectorAll(".items-grid li")

for (const item of itemsToColect) {
    document.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")
let selectedItems = [];

function handleSelectedItem(event) {
    const itemLi = event.target
    // add or remove class with js
    itemLi.classList.toggle("selected")
    const itemId = itemLi.dataset.id

    //check and grab if there are selected items
    const alreadySelected = selectedItems.findIndex(item => item === itemId) // returns the item's index at the selectedItems

    // if element is already selected, remove from selection
    if (alreadySelected >= 0) {
        // remove from selection
        const filteredItems = selectedItems.filter(item => item !== itemId)
        selectedItems = filteredItems
    } else {
        // if element isn't selected yet, add to selection
        selectedItems.push(itemId);
    }

    //update hidden element with selected items
    collectedItems.value = selectedItems



}

