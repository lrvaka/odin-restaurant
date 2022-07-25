import "./Navbar.scss"
import { Home } from "../Home"
import { Menu } from "../Menu"
import { Contact } from "../Contact"

const NAV_ITEM_INFO = [
  { name: "Home", link: Home() },
  { name: "Menu", link: Menu() },
  { name: "Contact", link: Contact() },
]

const Navbar = (container) => {
  const header = document.createElement("header")
  const logo = document.createElement("h1")
  const headerItems = document.createElement("ul")

  header.classList.add("header")
  logo.classList.add("header-logo")
  headerItems.classList.add("header-items")

  NAV_ITEM_INFO.forEach((e) => {
    const headerItem = document.createElement("li")
    const headerLink = document.createElement("a")

    headerItem.classList.add("header-item")

    headerLink.textContent = e.name

    headerItems.appendChild(headerItem)
    headerItem.appendChild(headerLink)

    headerLink.addEventListener("click", () => {
      container.removeChild(container.firstChild)
      container.appendChild(e.link)
    })
  })

  logo.textContent = "Premiere Cuisine"

  header.appendChild(logo)
  header.appendChild(headerItems)

  return header
}

export { Navbar }
