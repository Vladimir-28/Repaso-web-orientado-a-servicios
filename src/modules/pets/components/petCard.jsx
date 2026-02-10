
function PetCard({ pet }) {

    const handleStatus = status => {
        switch (status) {
            case "IN_ADOPTION":
                return <span className="badge bg-success">En adopción</span>
            case "IN_PROCESS":
                return <span className="badge bg-primary">En proceso de adopción</span>
            case "ADOPTED":
                return <span className="badge bg-dark">Adoptado</span>
        }
    }

    const handleGender = gender => {
        if (gender) {
            return <span className="badge" style={{ backgroundColor: '#FF87FF' }}><i className="bi bi-gender-male"></i> Macho</span>
        } else {
            return <span className="badge" style={{ backgroundColor: '#58B0FF' }}><i className="bi bi-gender-female"></i> Hembra</span>
        }
    }

    return (
        <article className="col-3">
            <div className="card shadow-sm rounded-4 border-0">
                <div className="card-body">
                    <div className="w-100 mb-3 rounded-3" style={{ height: 250 }}>
                        <img src={!!pet ? pet.img_url : ""} alt="" className="img-fluid rouded-3 w-100 h-100" />
                    </div>
                    <h4>
                        <i className="bi bi-bluesky me-1" />
                        <span>{!!pet ? pet.name : "nombre_mascota"}</span>
                    </h4>
                    <p>
                        <span className="fw-bold me-1">Edad:</span>
                        <span>{!!pet ? `${pet.age} año(s)` : "0 años"}</span>
                    </p>
                    <p>
                        <span className="fw-bold me-1">Raza:</span>
                        <span>{!!pet ? pet.breed : "raza_mascota"}</span>
                    </p>
                    <p>
                        <span className="fw-bold me-1">Genero:</span>
                        {!!pet ? handleGender(pet.gender)
                            : (
                                <></>
                            )}
                    </p>
                    <p>
                        <span className="fw-bold me-1">Estado:</span>
                        {!!pet ? handleStatus(pet.status) : (
                            <></>
                        )}
                    </p>
                    <div className="text-end">
                        <button type="button" className="btn btn-primary">Adoptame</button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default PetCard;