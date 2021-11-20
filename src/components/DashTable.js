import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from '../data/MOCK_DATA.json'

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function DashTable() {
  const columns = useMemo(() => [
    {
      Header: 'Role',
      accessor: 'Role'
    },
    {
      Header: 'Data Posted',
      accessor: 'Date Posted'
    },
    {
      Header: 'Submissions',
      accessor: 'Submissions'
    },
    {
      Header: 'Saves',
      accessor: 'Saves'
    }
  ], [])

  const data = useMemo(() => MOCK_DATA, [])

  return (
    <Table columns={columns} data={data} />
  )
}

export default DashTable;