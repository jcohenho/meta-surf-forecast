// Support component names relative to this directory:
const componentRequireContext = require.context("components", true)
const ReactRailsUJS = require("react_ujs")
ReactRailsUJS.useContext(componentRequireContext)

const Headroom = require("headroom.js")

document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector(".navbar")
  new Headroom(navbar, {
    "classes": {
      "initial": "animated",
      "pinned": "slideDown",
      "unpinned": "slideUp"
    }
  }).init()
})
