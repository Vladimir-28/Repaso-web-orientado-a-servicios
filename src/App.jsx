import { use, useState } from 'react'


function App() {
	const [flag, setFlag] = useState(false);
	const [list, setLIst] = useState(['Ana', 'Luisa', 'Pepe', 'Juan', 'Roberto']);
	const [users, setUsers] = useState([
		{
			id: 1,
			name: 'Luisa',
			status: false
		},
		{
			id: 2,
			name: 'Roberto',
			status: true
		},
		{
			id: 3,
			name: 'Coker',
			status: true
		}
	]);

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

			<h3 className="mt-4">Estructura iterada</h3>
			<hr />
			<div className="row g-3">
				{list.map((item, index) => (
					<div key={index} className="col-3">
						<div className="card border-0 shadow">
							<div className="card-body">
								<h4>{item}</h4>
							</div>
						</div>
					</div>
				))}
			</div>

			<h3 className="mt-4">Estructuras mezcladas</h3>
			<hr />
			<div className="row g-3">
				{users.map((user) => (
					<div key={user.id} className="col-3 mb-4">
						<div className="card border-0 shadow">
							<div className="card-body">
								<h4>{user.name}</h4>
								{user.status ? (
									<span className="badge bg-success">Activo</span>
								) : (
									<span className="badge bg-danger">Inactivo</span>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</main>
	)
}

export default App
