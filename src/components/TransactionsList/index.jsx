import React from "react";
import DashCard from "./DashCard";
import "./styles.css";

const ListTransactions = ({ listTransactions, removeTransactions }) => {
  return (
    <ul>
      {listTransactions.map((transaction, index) =>
        transaction.type === "entrada" ? (
          <DashCard
            key={index}
            transaction={transaction}
            removeTransactions={removeTransactions}
            className="containerInfoContentEntrada"
          />
        ) : (
          transaction.type === "saida" && (
            <DashCard
              key={index}
              transaction={transaction}
              removeTransactions={removeTransactions}
              className="containerInfoContentSaida"
            />
          )
        )
      )}
    </ul>
  );
};

export default ListTransactions;
