import questions from "../../data/questions.json"
import { location } from "@hyperapp/router"

export default {
  location: location.state,
  currentQuestion: [],
  questions,
  filter: {
    category: "All",
    expertise: "short",
    sortAscending: true,
    dropdown: {
      name: "Category",
      items: [
        {
          name: "All",
          icon: "check"
        },
        {
          name: "Advice",
          icon: "layout"
        },
        {
          name: "CSS",
          icon: "feather"
        },
        {
          name: "JavaScript",
          icon: "code"
        },
        {
          name: "React",
          icon: "globe"
        },
        {
          name: "Node",
          icon: "server"
        },
        {
          name: "Security",
          icon: "shield"
        }
      ]
    }
  }
}
