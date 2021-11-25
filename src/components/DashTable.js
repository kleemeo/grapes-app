import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from '../data/MOCK_DATA.json'
import './DashTable.scss'


function Table({ columns, data }) {
  // using react-table to populate a table
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

  // render to table
  return (
    <table {...getTableProps()} >
      <thead className="test">
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
    </table >
  )
}

function DashTable() {
  // Set columns heading + data point in data objects
  const columns = useMemo(() => [
    {
      Header: 'Role',
      accessor: 'title'
    },
    {
      Header: 'Location',
      accessor: 'place'
    },
    {
      Header: 'Data Posted',
      accessor: 'date'
    }
  ], [])

  const data = useMemo(() => MOCK_DATA, [])

  return (
    <Table columns={columns} data={data} />
  )
}

export default DashTable;