import React from "react";
import ListTransactions from "../../components/TransactionsList";
import DashForm from "../../components/DashForm";
import Header from "../../components/Header";
import "./styles.css";
import "../../reset.css";
import Button from "../../components/Button";
import TotalMoney from "../../components/TotalMoney";


const DashBoardPage = ({
  listTransactions,
  createTransactions,
  removeTransactions,
  setLogin,
  setFilter,
  filter,
}) => {

  return (
    <div className="containerDash">
      <Header setLogin={setLogin} />
      <div className="containerContent">
        <section className="containerTransactions">
          <div className="containerTransactionsContent">
            <DashForm createTransactions={createTransactions} />
          </div>
          <TotalMoney listTransactions={listTransactions}/>

        </section>
        <section className="containerCards">
          <div>
            <div className="filterButtons">
              <p>Resumo financeiro</p>
              <div className="filteredButtons">
                <Button className={filter === "todos" ? "active" : ""} type="button" onClick={() => {setFilter("todos")}}>Todos</Button>
                <Button className={filter === "entrada" ? "active" : ""} type="button" onClick={() => {setFilter("entrada")}}>Entradas</Button>
                <Button className={filter === "saida" ? "active" : ""} type="button" onClick={() => {setFilter("saida")}}>Despesas</Button>
              </div>
            </div>
            <ListTransactions
              listTransactions={listTransactions}
              removeTransactions={removeTransactions}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashBoardPage;
