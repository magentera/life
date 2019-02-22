import { h } from "hyperapp"
import { cc, EXPERTISE_STRINGS } from "../utils"
import Icon from "./Icon"
import Markdown from "./Markdown"
import { Link, location } from "@hyperapp/router"

export default ({
  name,
  author,
  date,
  image,
  question,
  tags,
  answer,
  goodToHear,
  isOpen,
  expertise
}) => (state, actions) => (
  <li
    class={cc("Question-wrapper", {
      "is-visible":
        state.filter.category.toLowerCase() === "all" ||
        tags.includes(state.filter.category.toLowerCase())
    })}
    key={name}
    id={name.slice(0, name.length - 3)}
    onclick={() => {
      actions.onAnswerMoveToDetailClick({ name })
    }}
  >
    <div class={`Question__badge is-${EXPERTISE_STRINGS[expertise]}`}>
      {EXPERTISE_STRINGS[expertise]}
    </div>
    <div class="Question">
      <div class={`Question__tag is-${tags[0]}`} />

      <Markdown class="Question__heading-image" content={`## ${image}`} />
      <div class="444">
        <Markdown class="Question__heading" content={`${question}`} />
        <Markdown
          class="Question__heading"
          content={`By ${author} - ${date}`}
        />
      </div>

      <div class={cc("Question__answer", { "is-open": isOpen })}>
        <Markdown content={answer} />
        {goodToHear.length > 0 && <h4>Good to hear</h4>}
        <ul>
          {goodToHear.map(i => (
            <Markdown node="li" content={i} />
          ))}
        </ul>
      </div>
      <div />
    </div>
  </li>
)
