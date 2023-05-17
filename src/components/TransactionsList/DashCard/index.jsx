import React from "react";
import Trash from "../../../assets/trash.svg";

const DashCard = ({ transaction, removeTransactions, className }) => {
  console.log(Number(transaction.value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  }))
  return (
    <li className={className}>
      <div className="containerCardContent">
        <h3>{transaction.description}</h3>
        <div className="containerTrash">
          <span>
            {Number(transaction.value).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <button onClick={() => removeTransactions(transaction)}>
            <img src={Trash} alt="" />
          </button>
        </div>
      </div>
      <p>{transaction.type}</p>
    </li>
  );
};

export default DashCard;
