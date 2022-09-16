import { Header } from "./components/Header"
import { Post } from "./components/Post"

import styles from "./App.module.css"
import "./global.css"
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/otonii.png',
      name: 'Otonii',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de substituir meu portifolio' },
      { type: 'link', content: 'jane.design/doctor.care' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/drayerr.png',
      name: 'Drayerr',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de substituir meu portifolio' },
      { type: 'link', content: 'jane.design/doctor.care' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      {/* o wrapper está separando os componentes internos em duas colunas, configurado no app.module.css */}
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={new Date()}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
