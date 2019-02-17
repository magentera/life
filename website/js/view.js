import { h } from "hyperapp"
import { Link, Route, location } from "@hyperapp/router"
import BackToTopButton from "./components/BackToTopButton"
import Header from "./components/Header"
import Filter from "./components/Filter"
import Questions from "./components/Questions"
import Footer from "./components/Footer"
import Introduction from "./components/Introduction"

export default () => (
  <div>
    <BackToTopButton />
    <Header />
    {/* <Introduction /> */}
    {/* <Filter /> */}
    <Questions />
    <Footer />
  </div>
)
