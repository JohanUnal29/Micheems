
import { db } from "../firebase/config";
import React, { useState, useEffect } from "react";


export default function Form(animal) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        
        db.collection("Solicitudes")
            .add({
                name: name,
                email: email,
                message: message,
                namePet: animal.nombre,
                nameAge: animal.edad,
            })
            .then(() => {
                setLoader(false);
                alert("Your message has been submitted👍");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h5>Adopta</h5>

            <label>Name</label>
            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Message</label>
            <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
                type="submit"
                style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
            >
                Adoptame
            </button>
        </form>
    );
}
