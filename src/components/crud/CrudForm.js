import React from "react";
import { useState, useEffect } from "react";

const initialForm = {
  id: null,
  name: "",
  price: "",
  imageUrl: "",
};

const CrudForm = ({ createData, updateData, setDataToEdit, dataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) {
      alert("Datos incompletos");
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };

  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>Agregar</h3>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="price"
          placeholder="precio"
          onChange={handleChange}
          value={form.price}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="URL de imagen"
          onChange={handleChange}
          value={form.imageUrl}
        />
        <input type="submit" value="enviar" />
        <input type="reset" value="limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
