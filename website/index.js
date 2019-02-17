/* eslint no-restricted-globals: 0 */
import { h, app } from "hyperapp"
import { Link, Route, location } from "@hyperapp/router"

import "focus-visible"
import "./css/index.scss"
import "./js/browser"

import state from "./js/state"
import actions from "./js/actions"
import view from "./js/view"
import topic from "./js/components/Topic"

const initialView = state => (
  <div>
    <Route path="/" render={view} />
    <Route path={"/topic/:id"} render={topic} />
  </div>
)

const main = app(state, actions, initialView, document.body)

setTimeout(() => {
  const backToTopButton = document.querySelector(".BackToTopButton")
  addEventListener("scroll", () => {
    backToTopButton.classList[window.scrollY > 750 ? "add" : "remove"](
      "is-visible"
    )
  })
})

const unsubscribe = location.subscribe(main.location)
