import { h } from "hyperapp"

export default ({ urls }) => (state, actions) => {
  console.log(urls)
  return (
    <div class="BreadCrumb">
      <span>
        <span
          onclick={() => {
            window.history.back()
          }}
        >
          <a>Home</a>
        </span>
        <span> / </span>
        {[...Array(urls)].map(url => (
          <span> {url} / </span>
        ))}
      </span>
    </div>
  )
}
