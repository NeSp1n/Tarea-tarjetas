import React from "react";
import List from "./List";
import Heading from "./Heading";
import Card from "./Card";
import contacts from "./contacs";

function createCard(contact) {
  return (
    <Card
      namecontact={contact.name}
      image={contact.image}
      tel={contact.tel}
      email={contact.email}
    />
  );
}

function App() {
  let isLogged = true;
  return (
    <div>
      {isLogged && contacts.map(createCard)}
      {/*<Heading />
      <List />*/}
    </div>
  );
}

export default App;
