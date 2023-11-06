import React from "react";

const CrudTableRow = ({ product, setDataToEdit, deleteData }) => {
  const { id, name, price, imageUrl } = product;

  const handleDelete = () => {
    deleteData(id);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{imageUrl}</td>
      <td>
        <button onClick={() => setDataToEdit(product)}>Editar</button>
        <button onClick={handleDelete}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
