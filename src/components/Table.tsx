import { ReactNode, useState } from "react"

interface Column<T> {
  name: string
  render: (item: T) => ReactNode
  // comparator
}

interface TablePropTypes<T> {
  items: T[],
  columns: Column<T>[]
}
export const Table = <T extends { id: string }>({items, columns}: TablePropTypes<T>) => {
  
  
  return (
    <table>
      <thead>
        <tr>
          {columns.map(column => <th key={column.name}>{column.name}</th>)}
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            {columns.map(column => <td key={column.name}>{column.render(item)}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}