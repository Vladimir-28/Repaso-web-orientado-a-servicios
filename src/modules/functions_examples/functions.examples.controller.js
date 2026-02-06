/*  Caracteristicas funcion flecha
    1.- Si es una sola funcion, se pueden quitar las llaves

*/
const function1 = () => console.log("Hola");

function functionAux1(){
    console.log("Hola");
}

async function fetchFunction(){
    try{
        let response = await fetch('', {});
        let result = response.json();

        if(result.status == 400){
            return result.data;
        }else {
            return null;
        }
    }catch(ex) {
        console.log(ex);
    }
}

const fetchFunction = async => fetch('', {}).then(response => response.json()).then(result => result).catch(console.log);


//2.- Si solo tengo un parametro, puedo quitar los parentesis de la funcion
//RESTRICCION: si es solo un variable pero hay que destructurar, lleva parentesis obligatoriamente

const function2 = name => console.log(name);

const functionAux2 = (name) => console.log(name);

const functionAux = (item, index) => {}

const treatResponde = ({data}) => {}

//3.- Resumir instrucciones, para esto requiero que se cumplan las reglas 1 y 2

fetch().then().then().catch(console.log);

// Primera forma (retorno explicito, si tengo mas de una instruccion)
const sumaExplicita = (num1, num2) => {
    console.log();
    
    return num1 + num2;
}

//Segunda forma (retorno implicito, solo es una instruccion)
const sumaImplicita = (num1, num2) => num1+num2;
const getDataOfArray = (array, index) => array[index];

