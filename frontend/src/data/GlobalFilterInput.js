import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import { CiSearch } from "react-icons/ci";

export function GlobalFilterInput({
	preGlobalFilteredRows,
	globalFilter,
	setGlobalFilter
}) {

	const count = preGlobalFilteredRows.length;
	const [value, setValue] = useState(globalFilter)
	const onChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined);
	}, 300);

	return (
		<span className='search-field'>
			<CiSearch size={40} />
			<input className='search-input'
				value={value || ''}
				onChange={(e) => {
					setValue(e.target.value);
					onChange(e.target.value);
				}}
				placeholder={'Search event'}
			// placeholder={`${count} records...`}
			/>
		</span>
	);
}