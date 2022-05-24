//let React = require("react");
//let ReactDOM = require("react-dom");
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import contacts from "./contacs";

//Con referencia a root
const root = ReactDOM.createRoot(document.getElementById("root"));
//JSX Permite utilizar expresiones de Javascript dentro del código HTML

const customStyle = {
  height: "100px",
  width: "100px",
  border: "1px solid black"
};

/*const fName = "Carlos";
const lName = "Rubio";
const header1 = (
  <div>
    <Heading />
    <p style={customStyle}>Copyright {new Date().getFullYear()}</p>
    <List />
  </div>
);*/

root.render(
  <div>
    <h1 className="heading"> Mis contactos</h1>
    <App />
    {/*isLogged ?  contacts.map(createCard) : <p>Acceso denegado</p>*/}
    {/*isLogged ?  contacts.map(createCard) : null*/}
    {}

    {/*<Card
      namecontact={contacts[0].name}
      image={contacts[0].image}
      tel={contacts[0].tel}
      email={contacts[0].email}
    />
    <Card
      namecontact={contacts[1].name}
      image={contacts[1].image}
      tel={contacts[1].tel}
      email={contacts[1].email}
    />
    <Card
      namecontact={contacts[2].name}
      image={contacts[2].image}
      tel={contacts[2].tel}
      email={contacts[2].email}
    />*/}
  </div>
);

let list_numbers = [50, 1, 9, 100, 85];

/*let new_list_numbers = [];
list_numbers.forEach(function(x) {
  new_list_numbers.push(x*2);
})
console.log(new_list_numbers);*/

//Map crea una un nuevo arreglo aplicando una función a cada elemento
//de un arreglo.
/*let new_list_numbers = list_numbers.map(function (x) {
  return x * 2;
});*/
let new_list_numbers = list_numbers.map((x) => x * 2);
console.log(new_list_numbers);

/*let filtered_numbers = [];
list_numbers.forEach(function (x) {
  if (x > 50) {
    filtered_numbers.push(x);
  }
});
console.log("Filtrados", filtered_numbers);*/

/*let reduced_number = 0;
list_numbers.forEach(function (x) {
  reduced_number += x;
});
console.log("Valor reducido", reduced_number);*/

//Reduce acumula un valor haciendo algo a cada elemento de un arreglo.
/*let reduced_number = list_numbers.reduce(function(accum, x) {
  return accum + x;
});*/
let reduced_number = list_numbers.reduce((accum, x) => accum + x);
console.log("Valor reducido", reduced_number);

//Filter crea un nuevo arreglo que mantiene los elementos que dan verdadero
//en la función que se asigna como parámetro.
/*let filtered_numbers = list_numbers.filter(function (x) {
  return x > 50;
});*/
let filtered_numbers = list_numbers.filter((x) => x > 50);
console.log("Filtrados", filtered_numbers);

//Con método estático
//ReactDOM.render(<h1>Otra cosa</h1>, document.getElementById('root'));

//Con javascript vanilla
/*let root = document.getElementById('root');
root.innerHTML = "<h1>asiokdnjsafoi</h1>";*/
