import "./styles.css";
console.log("index")
console.log("webpack live server")


const body = document.querySelector("body")
const header = document.createElement("header")
const nav = document.createElement("nav")

const nav_button_home = document.createElement("button")
nav_button_home.textContent = "Home"

const nav_button_menu = document.createElement("button")
nav_button_menu.textContent = "Menu"

const nav_button_about = document.createElement("button")
nav_button_about.textContent = "About"


const content = document.createElement("div")
content.id = "content"

body.appendChild(header)
body.appendChild(content)
header.appendChild(nav)
nav.appendChild(nav_button_home)
nav.appendChild(nav_button_menu)
nav.appendChild(nav_button_about)