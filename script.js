function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/114521520?s=400&u=287d38a8ab4fd5a9b34af01660a90e35482ee739&v=4"
    )
  } else {
    img.setAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/114521520?s=400&u=287d38a8ab4fd5a9b34af01660a90e35482ee739&v=4"
    )
  }
}
