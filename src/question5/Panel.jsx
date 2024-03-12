/* 2. Om collapsible är true, ska komponenten visa en knapp som låter användaren */
//    kollapsa eller expandera innehållet.
// 3. Visa panelens titel oavsett om innehållet är kollapsat eller inte.
// 4. Implementera logik inuti Panel för att hantera visning och döljande av

import { useState } from "react";

//    children baserat på användarens interaktion med "Visa/Mindre"-knappen.
export default function Panel(children, title, collapsible) {

  const[kollapsa, setKollapsa]= useState(false)

  function Collapsible() {
    if (collapsible) {
      return (
        <div>
<button onClick={Colapser}>Kollapsa</button>
        </div>
      )
    } else {
      return (
        <div>
<button onClick={Expander}>Expandera</button>
        </div>
      )
    }
  }
  function Expander() {
    setKollapsa(!kollapsa)
  }
  function Colapser() {
    setKollapsa(kollapsa)
  }
  



  return <div>
    <h1>{title}</h1>
    
    <Collapsible/>
  </div>;
}
