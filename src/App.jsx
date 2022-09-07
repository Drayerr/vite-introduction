import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from "./App.module.css"
import "./global.css"
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <div>
      <Header />
      {/* o wrapper está separando os componentes internos em duas colunas, configurado no app.module.css */}
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Gabriel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam amet labore dolores quod suscipit earum assumenda unde maiores eligendi id. Fugiat ratione, suscipit corporis voluptates blanditiis eaque harum omnis dolorum."
          />
        </main>
      </div>
    </div>
  )
}
