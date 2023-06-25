import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import Navbarr2 from '../sub-components/navbar/Navbarr2';
import "./Adopt.css";

const ItemListContainer = () => {

    const [animales, setAnimales] = useState([]);

    const [titulo, setTitulo] = useState("Productos");

    const categoria = useParams().categoria;

    useEffect(() => {
      
      const animalesRef = collection(db, "Mascotas");
      const q = categoria ? query(animalesRef, where("categoria", "==", categoria)) : animalesRef;
      
      getDocs(q)
        .then((resp) => {
          setAnimales( resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id}
          }))
        })
        console.log(animales);
      
    }, [categoria])
    
    
  return (
    <div className="adopt">
        <Navbarr2></Navbarr2>
        <ItemList animales={animales} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer