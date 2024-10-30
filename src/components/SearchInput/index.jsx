/* eslint-disable react/prop-types */

const SearchInput = ({ inputValue, handleInputChange }) => {
	return (
		<div className=' border-2 border-gray-500 px-5 py-3  rounded-lg'>
			<input
				type='text'
				className=' outline-none'
				value={inputValue}
				onChange={handleInputChange}
				placeholder='Escribe algo...'
			/>
		</div>
	)
}

export default SearchInput
