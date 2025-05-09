import { useEffect, useState } from 'react'
import data from '../assets/data.json'

type Item = {
  id: number
  todo: string
  completed: boolean
}

export const useItems = () => {
  const [records, setRecords] = useState<Item[]>([])

  useEffect(() => {
    if (!localStorage.getItem('items')) {
      localStorage.setItem('items', JSON.stringify(data.items))
    }
    setRecords(JSON.parse(localStorage.getItem('items')!) as Item[])
  }, [])

  const create = (item: Pick<Item, 'name' | 'description'>) => {
    const items = JSON.parse(localStorage.getItem('items')!) as Item[]
    items.push({ id: items.length + 1, ...item })
    localStorage.setItem('items', JSON.stringify(items))
    setRecords(items)
  }

  return { data: records, create }
}

export const useItem = (id: number) => {
  const items = useItems()

  return { data: items.data.find((item) => item.id === id) }
}
