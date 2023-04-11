import React from "react";
import { CharacterContext } from "../context/CharacterContext";
import { useContext } from "react";


const CharacterCard = () => {
    const {data, setData} = useContext(CharacterContext)
  return data.map((value, index) => {
    return (
      <div
        className="card"
        style={{ width: "18rem", margin: "20px" }}
        key={index}
      >
        <img src={value.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{value.name}</h5>
          <p className="card-text">Location: {value.location.name}</p>
          <p className="card-text">Url: <a href={value.url} target="_blank">{value.url}</a></p>
          <a
            className="btn btn-danger"
            onClick={ ()=>{
              setData(data.filter((char) => char.id !== value.id));
            }}
          >
            Eliminar
          </a>
        </div>
      </div>
    );
  });
};

export default CharacterCard;
