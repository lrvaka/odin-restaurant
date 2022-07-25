import "./Contact.scss"

const CONTACT_ITEMS = [
  { name: "Phone", detail: "999-129-1023" },
  { name: "Instagram", detail: "@PremiereCuisine" },
  { name: "Twitter", detail: "@PremiereCuisine" },
]

const Contact = () => {
  const contact = document.createElement("div")
  contact.classList.add("contact")

  CONTACT_ITEMS.forEach((e) => {
    const contactItem = document.createElement("div")
    const contactItemName = document.createElement("h3")
    const contactItemDesc = document.createElement("p")

    contactItemName.textContent = e.name
    contactItemDesc.textContent = e.detail

    contactItem.classList.add("contact-item")

    contactItem.appendChild(contactItemName)
    contactItem.appendChild(contactItemDesc)

    contact.appendChild(contactItem)
  })

  return contact
}

export { Contact }
