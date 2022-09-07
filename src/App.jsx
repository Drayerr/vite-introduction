import { Header } from "./components/Header"
import { Post } from "./Post"
import "./global.css"

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Gabriel"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam amet labore dolores quod suscipit earum assumenda unde maiores eligendi id. Fugiat ratione, suscipit corporis voluptates blanditiis eaque harum omnis dolorum."
      />

    </div>
  )
}
