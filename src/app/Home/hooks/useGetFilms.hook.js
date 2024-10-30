import { useState, useEffect } from 'react'
import { useDebounce } from '../../../hooks/useDebounce.hook'

const useGetFilms = searchInput => {
	const [loading, setLoading] = useState(false)
	const [films, setFilms] = useState([])

	const debounceValue = useDebounce(searchInput, 300)

	const getFilms = async () => {
		try {
			setLoading(true)

			const data = await fetch(
				`http://localhost:5000/api/films?q=${debounceValue}`,
			)
			const dataJson = await data.json()
			setFilms(dataJson)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getFilms()
	}, [debounceValue])

	return { films, loading }
}

export { useGetFilms }
