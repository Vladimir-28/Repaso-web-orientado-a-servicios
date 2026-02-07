function Pets(){

    return(
        <main className="p-5">
            <h3>Listado de mascotas</h3>
            <hr />
            <section className="row g-3">
                <article className="col-3">
                    <div className="card shadow-sm rounded-4 border-0">
                        <div className="card-body">
                            <p>
                                <i className="bi bi-bluesky mr-2"/> 
                                <span>Nombre mascota</span>
                            </p>
                            <p>
                                <span className="fw-bold">Edad:</span>
                                <span>Edad mascota</span>
                            </p>
                            <div className="w-100 bg-secondary" style={{height: 250}}>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    )

}

export default Pets