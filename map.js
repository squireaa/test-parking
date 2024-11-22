const menuButton = document.getElementById("burger")
const navigationMenu = document.getElementById("nav-menu")
const filterTab = document.getElementById("filter-tab")
const filterTabClosed = document.getElementById("filter-closed")
const filterUp = document.getElementById("filter-up")
const applyButton = document.getElementById("apply-button")
const regularMap = document.getElementById("regular-map")
const coloredMap = document.getElementById("colored-map")
// const parkingButtons = document.getElementById("parking-buttons")
// const filterClosed = document.getElementById("filter-closed")
// const filterBottom = document.getElementById("filter-bottom")

function openMenu() {
    if (navigationMenu.style.visibility === "visible") {
        navigationMenu.style.visibility = "hidden"
    } else {
        navigationMenu.style.visibility = "visible"
    }
}

function openFilter() {
    filterTabClosed.style.visibility = "hidden"
    filterUp.style.visibility = "visible"
    
}

function closeFilter() {
    filterTabClosed.style.visibility = "visible"
    filterUp.style.visibility = "hidden"
}

menuButton.addEventListener('click', openMenu);
filterTab.addEventListener('click', closeFilter)
filterTabClosed.addEventListener('click', openFilter)
applyButton.addEventListener('click', () => {
    closeFilter()
    regularMap.style.visibility = "hidden"
    coloredMap.style.visibility = "visible"
})

const parkingButtons = document.querySelectorAll("#parking-buttons button")
parkingButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.style.backgroundColor === "rgb(140, 25, 25)") {
            button.style.backgroundColor = "rgb(212, 32, 32)"
        } else {
            button.style.backgroundColor = "rgb(140, 25, 25)"
        }   
    })
})

const locationButtons = document.querySelectorAll("#location-buttons button")
locationButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.style.backgroundColor === "rgb(140, 25, 25)") {
            button.style.backgroundColor = "rgb(212, 32, 32)"
        } else {
            button.style.backgroundColor = "rgb(140, 25, 25)"
        }   
    })
})
