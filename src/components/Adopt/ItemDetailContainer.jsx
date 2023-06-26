import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import Navbarr4 from '../sub-components/navbar/Navbarr4';
import "./ItemDetail.css";
const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {

      const docRef = doc(db, "Mascotas", id);

      getDoc(docRef)
        .then((resp) => {
          setItem( {
            ...resp.data(), id: resp.id
          } );
        })
        
    }, [id])
    

  return (
    <div className="conta">
        <Navbarr4></Navbarr4>
        {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer