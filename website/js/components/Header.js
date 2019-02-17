import { h } from "hyperapp"
import Icon from "./Icon"

export default () => (
  <div>
    <header class="Header" />
    <div class="Header__lower">
      <div class="flexcontainer">
        <a
          class="btn Header__github"
          href="https://github.com/magentera"
          target="_blank"
          rel="noopener"
        >
          <Icon class="Header__github-star" name="star" />
          Follow me on GitHub
        </a>
        <a
          class="btn Header__github"
          href="https://www.linkedin.com/in/mathew-stevenson-249a33aa"
          target="_blank"
          rel="noopener"
        >
          <Icon class="Header__linkedin-icon" name="linkedin" />
          Connect on LinkedIn
        </a>
      </div>
    </div>
  </div>
)
