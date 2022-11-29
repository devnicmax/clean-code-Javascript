/* Argumentos predefinido */
//Mala practica
create = () => {
    const name = name || 'not define'
    //code here
};
// Practica recomendable
create = (name = "not define") => {
    //code here
}




/* Encapsular condicional dentro de funcion */
//Mala practica
if((x == true) && (y < 20)){
    //code here
}

//Practica recomendable
verificar = (x,y) => {
    return x == true && y < 20;
}