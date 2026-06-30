import { useNavigate } from 'react-router-dom'
import { useField } from '../hooks'
import useAnecdotes from '../hooks/useAnecdotes'
const CreateNew = () => {
  const { addAnecdote } = useAnecdotes()
  const navigate = useNavigate()

  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  const handleSubmit = (e) => {
    e.preventDefault()
    addAnecdote({ content: content.value, author: author.value, info: info.value, votes: 0 })
    navigate('/')
  }
  const handleReset = () => {
    content.onReset()
    author.onReset()
    info.onReset()

  }
  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input  {...author} />
        </div>
        <div>
          url for more info
          <input  {...info} />
        </div>
        <button>create</button>
      </form>
      <button onClick={() => handleReset()}>reset</button>
    </div>
  )
}

export default CreateNew
