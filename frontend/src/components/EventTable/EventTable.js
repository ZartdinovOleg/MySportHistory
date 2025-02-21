import './EventTable.css'
import { COLUMNS } from '../../data/Columns'
import sportEvents from '../../data/sportEvents'
import { useGlobalFilter, useTable } from 'react-table'
import { useMemo } from 'react'
import { GlobalFilterInput } from '../../data/GlobalFilterInput'
import PrintButton from '../Buttons/PrintButton/PrintButton'
import ShareButton from '../Buttons/ShareButton/ShareButton'
import BigTriangleDown from '../BigTriangleDown/BigTriangleDown'

function EventTable() {
	const columns = useMemo(() => COLUMNS, [])
	const data = useMemo(() => sportEvents, [])

	const tableInstance = useTable({
		columns, data
	}, useGlobalFilter)

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, preGlobalFilteredRows, setGlobalFilter, state } = tableInstance

	return (
		<div className='event-table'>
			<GlobalFilterInput
				preGlobalFilteredRows={preGlobalFilteredRows}
				setGlobalFilter={setGlobalFilter} globalFilter={state.globalFilter}
			/>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>
									{column.render('Header')}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map(row => {
						prepareRow(row)
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return <td {...cell.getCellProps()}>
										{cell.render('Cell')}</td>
								})}
							</tr>
						)
					})
					}
				</tbody>
			</table>
			{/* <div className='share-and-print-table-buttons'>
				<ShareButton buttonText="Share with friends" />
				<PrintButton buttonText="Print your event" />
			</div> */}
			<div>
				<BigTriangleDown />
				<p className='sport-events-table-title'>More events are coming soon...</p>
			</div>
		</div>
	)
}

export default EventTable
