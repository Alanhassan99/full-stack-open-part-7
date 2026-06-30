import { useContext } from "react"
import AnecdoteContext from "../anecdoteContext"

const useAnecdotes = () => {

  return useContext(AnecdoteContext)
}

export default useAnecdotes