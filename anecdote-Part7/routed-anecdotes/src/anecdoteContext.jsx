import { createContext } from 'react'
import { useState, useEffect } from 'react'
import anecdoteService from './services/anecdotes'

const AnecdoteContext = createContext()

export const AnecdoteContextProvider = (props) => {
  const [anecdotes, setAnecdotes] = useState([])

  useEffect(() => {
    anecdoteService.getAll().then(data => setAnecdotes(data))
  }, [])

  const addAnecdote = (object) => {
    anecdoteService.createNew(object).then(data => setAnecdotes(anecdotes.concat(data)))
  }

  const removeAnecdote = (id) => {
    anecdoteService.remove(id).then(() => setAnecdotes(anecdotes.filter(anecdote => anecdote.id !== id))
    )
  }
  return (
    <AnecdoteContext.Provider value={{ anecdotes, addAnecdote, removeAnecdote }}>
      {props.children}
    </AnecdoteContext.Provider>
  )

}

export default AnecdoteContext