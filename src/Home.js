import heroImage from "./images/home-img.jpeg"
import "./Home.scss"

const Home = () => {
  const image = new Image()
  const home = document.createElement("div")
  const homeInfo = document.createElement("div")
  const homeHeading = document.createElement("h2")
  const homeParagraph = document.createElement("p")

  image.classList.add("home-img")
  home.classList.add("home")
  home.classList.add("home-info")
  homeHeading.classList.add("home-heading")
  homeParagraph.classList.add("home-paragraph")

  image.src = heroImage
  homeParagraph.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at elementum eu. Mi in nulla posuere sollicitudin aliquam. Nibh tellus molestie nunc non blandit massa enim. Magna eget est lorem ipsum. Leo vel orci porta non pulvinar. Iaculis nunc sed augue lacus viverra vitae congue. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Ac turpis egestas maecenas pharetra convallis posuere morbi. Bibendum at varius vel pharetra vel turpis. Id aliquet risus feugiat in ante. Tincidunt augue interdum velit euismod in pellentesque massa. Nunc consequat interdum varius sit amet."
  homeHeading.textContent = "Come by to get a taste of premiere"

  homeInfo.appendChild(homeHeading)
  homeInfo.appendChild(homeParagraph)
  home.appendChild(image)
  home.appendChild(homeInfo)

  return home
}

export { Home }
