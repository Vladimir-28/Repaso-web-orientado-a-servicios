const PetsController = {};

const API_URL = "http://localhost:5173/public/data/pets.json"
const Headers = {
    "Content-Type" : "application/json",
    "Accept": "application/json"
}

PetsController.findAll = async () => await fetch(API_URL, {
    method: 'GET',
    headers: {
        "Content-Type" : "application/json",
        "Accept": "application/json"
    }
})
.then(response => response.json())
.then(result => (result))
.catch(console.log);

export default PetsController;