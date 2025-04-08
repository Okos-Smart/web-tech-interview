import { Divider } from '../components/Divider'
import { Link } from '../components/Link'

export const IndexPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <Divider />
      <Link to="/todos">Todo List</Link>
    </div>
  )
}
