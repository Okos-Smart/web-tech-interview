import { useParams } from 'react-router'

export const TodoDetails = () => {
  const { id } = useParams()

  return <div>Todo {id}</div>
}
