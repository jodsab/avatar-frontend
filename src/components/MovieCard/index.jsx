/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const MovieCard = ({ data, episode_id, title, director }) => {
	return (
		<Link to={`films/${episode_id}`} state={data}>
			<div className='group bg-black rounded-lg px-5 py-3 hover:bg-yellow-50'>
				<p className='text-yellow-500 text-center text-2xl'>{title}</p>
				<p className='text-white text-center group-hover:text-black'>
					{director}
				</p>
			</div>
		</Link>
	)
}

export default MovieCard
