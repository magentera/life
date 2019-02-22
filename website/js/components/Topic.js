import { h } from "hyperapp"
import { Link, Route, location } from "@hyperapp/router"

import { cc, EXPERTISE_STRINGS } from "../utils"
import Icon from "./Icon"
import Markdown from "./Markdown"

import { Enter, Exit, Move } from "@hyperapp/transitions"
import HeaderTop from "./HeaderTop"
import BreadCrumb from "./BreadCrumb"

import Footer from "./Footer"

export default props => (state, actions) => {
  actions.scrollBackToTop()
  const item = state.questions.find(
    fruit => fruit.name === props.match.params.id
  )
  console.log(item)
  return (
    <div>
      <HeaderTop />
      <BreadCrumb urls={[item.name]} />

      <div class="Topic-wrapper">
        <div class="Topic">
          <div class="444">
            <Markdown class="Topic__heading" content={`${item.question}`} />
            <Markdown
              class="Topic__heading"
              content={`By ${item.author} - ${item.date}`}
            />
          </div>
          <Markdown class="Topic__heading-image" content={`## ${item.image}`} />

          <div>
            <Markdown content={item.answer} />
          </div>

          <div />
        </div>
      </div>
      <Footer />
    </div>
  )
}
