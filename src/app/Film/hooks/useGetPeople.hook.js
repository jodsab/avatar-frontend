import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetPeople = peopleList => {
	const [loading, setLoading] = useState([])
	const [characterNames, setCharacterNames] = useState([])

	useEffect(() => {
		const fetchCharacterNames = async () => {
			try {
				setLoading(true)
				const namesPromises = peopleList.map(url => axios.get(url))
				const responses = await Promise.all(namesPromises)
				const names = responses.map(response => response.data.name)
				setCharacterNames(names)
			} catch (error) {
				console.error(error)
			} finally {
				setLoading(false)
			}
		}

		fetchCharacterNames()
	}, [peopleList])

	return { loading, characterNames }
}

export { useGetPeople }
