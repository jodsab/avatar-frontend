import Film from './app/Film'
import Home from './app/Home'
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom'

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<Home />} />
			<Route path='films/:id' element={<Film />} />
		</>,
	),
)

function App() {
	return (
		<div className='App py-10'>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
