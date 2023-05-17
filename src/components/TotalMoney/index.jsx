import React from "react";

const TotalMoney = ({ listTransactions, children }) => {
  return (
    <div className="containerPrice">
      <div className="containerPriceContent">
        <h2>Valor total:</h2>
        <span>
           {listTransactions.reduce((acc, actualValue) => {
            if (actualValue.type === "saida") {
              return acc - +actualValue.value;
            } else {
              return acc + +actualValue.value;
            }
          }, 0).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
};

export default TotalMoney;
