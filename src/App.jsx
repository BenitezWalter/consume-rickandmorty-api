import { useState } from "react";
import CharacterCard from "./components/CharacterCard";
import { CharacterContext } from "./context/CharacterContext";

function App() {
  const [data, setData] = useState([]);

  const handleFetch = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        console.log(data.results);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div>
        <button
          onClick={handleFetch}
          className="container d-flex justify-content-center mt-4 btn btn-success"
        >
          Consumir API
        </button>
      </div>
      <div className="row justify-content-md-center">
        <CharacterContext.Provider value={{data, setData}}>
          <CharacterCard/>
        </CharacterContext.Provider>
      </div>
    </>
  );
}

export default App;
