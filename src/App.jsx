import { use, useState } from 'react'
import Pets from './modules/pets/Pets'
import CustomNavbar from './components/customNavbar'
import { Navigate, Routes, Route } from 'react-router-dom'
import Examples from './modules/examenes/Examples'


function App() {

	return (<>
		<CustomNavbar />

		<Routes>
			<Route path="/" element={<Navigate to="/pets" />} />
			<Route path="/pets" element={<Pets />} />
			<Route path="/examples" element={<Examples />} />
		</Routes>
	</>)
}

export default App
