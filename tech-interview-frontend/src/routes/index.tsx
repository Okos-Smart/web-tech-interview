import { Route, Routes } from 'react-router'
import { TodosIndex } from './todos'
import { IndexPage } from './page'
import { Link } from '../components/Link'

export const RoutesIndex = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Link to="/">
        <h2 className="font-bold text-white">Tech Interview App</h2>
      </Link>
      <Routes>
        <Route path="/*" element={<IndexPage />} />
        <Route path="/todos" element={<TodosIndex />} />
      </Routes>
    </div>
  )
}
