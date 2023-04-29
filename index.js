// IMPORTS
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


// DATABASE URL
const appSettings = {
    databaseURL: "https://playground-scrim-default-rtdb.firebaseio.com/"
}

// DATABASE
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")


// VARS
let inputFieldEl = document.getElementById("input-field")
let buttonEl = document.getElementById("add-button")


// EVENT LISTENERS
buttonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    push(shoppingListInDB, inputValue)
    
    console.log(`${inputValue} added to database`)
})

// buttonEl.addEventListener("click", function () {
//     let inputValue = inputFieldEl.value

//     alert(`${inputValue} added to database`)
// })