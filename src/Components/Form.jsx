import React from "react";
import { useState } from "react";


const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = [];

    if (name.length <= 5) {
      errors.push('Nombre debe tener al menos 5 caracteres');
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      errors.push('Email no válido');
    }

    setErrors(errors);

    if (!errors.length) {
      setSuccess(true);
      console.log('Nombre:', name);
      console.log('Email:', email);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errors.includes('Nombre debe tener al menos 5 caracteres') && (
        <p className="error">Nombre debe tener al menos 5 caracteres</p>
      )}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.includes('Email no válido') && (
        <p className="error">Email no válido</p>
      )}
      <button type="submit">Enviar</button>
      {success && (
        <p className="success">Gracias {name}, te contactaremos cuando antes vía mail</p>
      )}
    </form>
  );
};

export default Form;
