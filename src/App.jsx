import "./App.css";
import LandingPage from "./pages/LandingPage";
import DashBoardPage from "./pages/DashBoardPage";
import { useState } from "react";

export const App = () => {
  const [login, setLogin] = useState(false);

  const [listTransactions, setListTransactions] = useState([]);
  const [filter, setFilter] = useState("todos");
  
  const filterListTransactions = listTransactions.filter((transaction) =>
    filter === "todos" ? true : transaction.type === filter
  );

  function createTransactions(transactionsData) {
    setListTransactions([...listTransactions, transactionsData]);
  }

  function removeTransactions(transactionsId) {
    const newList = listTransactions.filter(
      (transactions) => transactions !== transactionsId
    );

    setListTransactions(newList);
  }

  return (
    <div className="App">
      {login ? (
        <DashBoardPage
          listTransactions={filterListTransactions}
          createTransactions={createTransactions}
          removeTransactions={removeTransactions}
          setLogin={setLogin}
          setListTransactions={setListTransactions}
          setFilter={setFilter}
          filter={filter}
        />
      ) : (
        <LandingPage setLogin={setLogin} />
      )}
    </div>
    
  );
};
