import "./style.scss"
import { Navbar } from "./UI/Navbar"
import { Home } from "./Home"

function init() {
  const container = document.createElement("div")
  container.classList.add("container")

  document.body.appendChild(Navbar(container))

  container.appendChild(Home())

  document.body.appendChild(container)

  return container
}

init()
