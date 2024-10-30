/* eslint-disable multiline-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { useLocation, useNavigate } from 'react-router-dom'
import { useGetPeople } from './hooks/useGetPeople.hook'
import Loading from '../../components/Loading'

const Film = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const {
		episode_id,
		title,
		director,
		opening_crawl,
		producer,
		release_date,
		characters,
	} = location.state || {}

	const { loading, characterNames } = useGetPeople(characters)

	return (
		<div className=' p-5'>
			<button
				className='text-black py-1 px-10 rounded-sm bg-red-400 hover:bg-red-600 hover:text-white transition-all duration-500'
				onClick={() => navigate(-1)}
			>
				Back
			</button>
			<div className='flex flex-col gap-2 my-2'>
				<p className=' font-bold text-4xl'>{title}</p>
				<p className=''>Directed by {director}</p>
				<p>{opening_crawl}</p>
			</div>
			<p>
				<span className=' font-medium'>Producers:</span> {producer}
			</p>
			<p>
				<span className=' font-medium'>Release:</span> {release_date}
			</p>
			{loading ? (
				<Loading />
			) : (
				<>
					<p className='font-medium mb-2'>Personajes:</p>
					<ul className=' grid grid-cols-1 md:grid-cols-3  '>
						{characterNames &&
							characterNames?.map((character, index) => {
								return (
									<li className=' list-disc list-inside' key={index}>
										{character}
									</li>
								)
							})}
					</ul>
				</>
			)}
		</div>
	)
}

export default Film
