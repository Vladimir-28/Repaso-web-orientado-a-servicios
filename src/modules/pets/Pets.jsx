import PetCard from "./components/petCard"
import { useEffect, useState } from "react";
import PetsController from "./pets.controller";

function Pets() {
    const [petList, setPetList] = useState([]);

    const handleCallToApi = async () => setPetList(await PetsController.findAll());

    useEffect(() => {
        handleCallToApi();
    }, []);

    return (
        <main className="p-5">
            <h3>Listado de mascotas</h3>
            <hr />
            {petList.length === 0 ? (
                <div className="alert alert-secondary rounded-4"><span>De momento no hay mascotas.</span></div>
            ) : (
                <section className="row g-3">
                    {petList.map(pet => (<PetCard pet = {pet}/>))}
                </section>
            )
            }
        </main >
    )

}

export default Pets;