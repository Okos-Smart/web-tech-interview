import { useItems } from '../../hooks/useItems'
import { Link } from '../../components/Link'
import { Route, Routes } from 'react-router'
import { TodoDetails } from './id'
import { useForm } from 'react-hook-form'
import { Divider } from '../../components/Divider'

export const TodosIndex = () => {
  const items = useItems()
  const form = useForm()

  const onSubmit = (data: any) => {
    items.create(data)
  }

  return (
    <div className="flex flex-col gap-4">
      <Divider />
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex gap-2">
          <input {...form.register('name', { required: true })} placeholder="Name" />
          <input {...form.register('description', { required: true })} placeholder="Description" />
          <button type="submit">Submit</button>
        </div>
      </form>
      <Divider />
      <div className="flex flex-wrap gap-4">
        {items.data.map((item) => (
          <Link to={`${item.id}`} key={item.id}>
            <div className="flex flex-col gap-2 p-4 border rounded-md">
              <div className="text-sm text-gray-500">{item.id}</div>
              <div className="text-sm">{item.name}</div>
            </div>
          </Link>
        ))}
        <Routes>
          <Route path=":id" element={<TodoDetails />} />
        </Routes>
      </div>
    </div>
  )
}
