import { scrollToTop } from "./utils"
import { location } from "@hyperapp/router"

export default {
  location: location.actions,
  scrollBackToTop: scrollToTop,
  onAnswerButtonClick: ({ name, isOpen }) => state => ({
    questions: state.questions.map(q =>
      q.name === name ? { ...q, isOpen: !isOpen } : q
    )
  }),
  onAnswerDetailClick: ({ name }) => state => ({
    currentQuestion: state.questions.map(q => (q.name === name ? { q } : null))
  }),
  onAnswerMoveToDetailClick: ({ name }) => {
    history.pushState(location.pathname, "", `/topic/${name}`)
  },
  filter: {
    onSortDirectionChange: () => state => ({
      sortAscending: !state.sortAscending
    }),
    set: name => ({ category: name })
  }
}
