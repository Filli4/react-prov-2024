// 3. Custom Hook för counter (3p)
// Skapa en custom hook, useCounter, som hanterar en räknare.
// Denna hook ska tillhandahålla två funktioner: en för att öka
// räknarens värde och en för att minska den. Skriv kod i App-komponenten
// nedanför som använder din custom hook och visar räknarens värde
// samt två knappar för att öka och minska värdet.

import { useState } from "react";

function App() {
 const [conunt, setCount]=useState(0)
 
  function incres() {
    setCount(conunt + 1)
  }
  function decres() {
    setCount(conunt - 1)
  }
 
 
  return <div>
    <h1>{conunt}</h1>
    <button onClick={incres}>incres</button>
    <button onClick={decres}>decres</button>

  </div>;
}

export default App;
