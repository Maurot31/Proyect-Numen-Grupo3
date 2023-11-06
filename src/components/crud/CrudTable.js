import React from "react";
import CrudTableRow from "./TableRow";

const CrudTable = ({ data, deleteData, setDataToEdit }) => {
  return (
    <div>
      <h3>Tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>ImageUrl</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={3}>Sin datos</td>
            </tr>
          ) : (
            data.map((product) => (
              <CrudTableRow
                key={product.id}
                product={product}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
