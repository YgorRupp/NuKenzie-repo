import React, { useState } from "react";
import uuid from 'react-uuid';

const DashForm = ({ index, createTransactions,}) => {
  const [formData, setFormData] = useState({
    id: uuid(),
    description: "",
    type: "",
    value: "",
  });

  const submit = (event) => {
    event.preventDefault();
    createTransactions(formData);
    setFormData({
      id: uuid(),
      description: "",
      type: event.target.children[3].children[1].children[1].value,
      value: "",
    });
  };

  return (
    <form onSubmit={submit}>
      <p>Descrição</p>

      <input
        className="firstInput"
        type="text"
        value={formData.description}
        placeholder="Digite aqui sua descrição"
        onChange={(event) =>
          setFormData({ ...formData, description: event.target.value })
        }
      />

      <span>Ex: Compra de roupas</span>

      <div className="containerFormSelect">
        <div className="firstInputSelect">
          <label htmlFor="">Valor</label>
          <input
            type="number"
            value={formData.value}
            placeholder="1"
            onChange={(event) =>
              setFormData({ ...formData, value: event.target.value })
            }
          />
        </div>

        <div className="secondInputSelect">
          <label htmlFor="">Tipo de valor</label>
          <select
            name=""
            id=""
            defaultValue={formData.type}
            onChange={(event) =>
              setFormData({ ...formData, type: event.target.value })
            }
          >
            <option key={index} value="">
              Escolha
            </option>
            <option key={index} value="entrada">
              Entrada
            </option>
            <option key={index} value="saida">
              Saida
            </option>
          </select>
        </div>
      </div>

      <button type="submit">Inserir valor</button>
    </form>
  );
};

export default DashForm;
