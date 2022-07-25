import { MenuItem } from "./UI/MenuItem"
import "./Menu.scss"

const MENU_ITEMS = [
  {
    name: "Linguini bambini",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas.",
    price: "$17.69",
  },
  {
    name: "Brambi Sambi",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas.",
    price: "$15.69",
  },
  {
    name: "Bochito Mochismo",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas.",
    price: "$30.69",
  },
  {
    name: "Lamprini Sagrini",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas.",
    price: "$20.69",
  },
  {
    name: "Trampino Sanguino",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas.",
    price: "$25.69",
  },
]

const Menu = () => {
  const menu = document.createElement("div")
  menu.classList.add("menu")

  MENU_ITEMS.forEach((e) => {
    menu.appendChild(MenuItem(e.name, e.desc, e.price))
  })

  return menu
}

export { Menu }
