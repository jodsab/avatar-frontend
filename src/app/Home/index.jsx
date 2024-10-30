/* eslint-disable multiline-ternary */
import { useState } from 'react'
import SearchInput from '../../components/SearchInput'
import { useGetFilms } from './hooks/useGetFilms.hook'
import MovieCard from '../../components/MovieCard'
import Loading from '../../components/Loading'

const Home = () => {
	const [searchValue, setSearchValue] = useState('')
	const { films, loading } = useGetFilms(searchValue)

	const handleSearchChange = event => {
		setSearchValue(event.target.value)
	}

	return (
		<div className='flex flex-col items-center gap-7'>
			<SearchInput
				inputValue={searchValue}
				handleInputChange={handleSearchChange}
			/>
			{loading ? (
				<Loading />
			) : (
				<div className='flex flex-col gap-4'>
					{films &&
						films?.map((film, index) => {
							return (
								<MovieCard
									data={film}
									key={index}
									episode_id={film.episode_id}
									title={film.title}
									director={film.director}
								/>
							)
						})}
				</div>
			)}
		</div>
	)
}

export default Home
