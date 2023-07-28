import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { Book } from '../../types/booksTypes'
import { useMemo } from 'react'

interface Props {
  props: Book[]
}

export function Table (props: Props): React.ReactNode {
  const data = useMemo(() => props, [])

  const colums = [
    {
      header: 'Name',
      accessoryKey: 'name',
      footer: 'Name'
    }
  ]
  /* @type import('@tanstack/react-table).columnDef<any> */
  const table = useReactTable({ data, colums })
  return (
    <section>
      <div>Table</div>
    </section>
  )
}
