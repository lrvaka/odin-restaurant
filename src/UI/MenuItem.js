import "./MenuItem.scss"

const MenuItem = (name, desc, price) => {
  const menuItem = document.createElement("div")
  const itemName = document.createElement("h3")
  const itemDesc = document.createElement("p")
  const itemPrice = document.createElement("div")

  menuItem.classList.add("menu-item")
  itemName.classList.add("menu-item-name")
  itemDesc.classList.add("menu-item-desc")
  itemPrice.classList.add("menu-item-price")

  itemName.textContent = name
  itemDesc.textContent = desc
  itemPrice.textContent = price

  menuItem.appendChild(itemName)
  menuItem.appendChild(itemDesc)
  menuItem.appendChild(itemPrice)

  return menuItem
}

export { MenuItem }
