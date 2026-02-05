import { useState } from 'react'


function App() {
	const [flag, setFlag] = useState(false);

	const handleValue = () => {
		setFlag(!flag);
	}

	return (
		<main className='p-4'>
			<h3>Estructura condicional</h3>
			<hr />
			<button type='button' className="btn btn-secondary mb-3" onClick={() => handleValue()}> Cambiar valor</button>
			{flag ? (
				<div className="alert alert-success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dicta dignissimos? Itaque velit fugiat deserunt repudiandae! Eum, esse sint quis mollitia adipisci soluta in aperiam eos, sunt reiciendis voluptatum eaque?</div>
			) : (
				<div className="alert alert-danger">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque iste nisi natus quod, numquam soluta impedit quos est maiores earum ullam animi cum nihil aut eveniet omnis commodi? Totam, recusandae!</div>
			)}

		</main>
	)
}

export default App
