import "./App.css";
import AddTransaction from "./Components/AddTransaction.jsx";
import Balance from "./Components/Balance.jsx";
import Header from "./Components/Header.jsx";
import IncomeExpenses from "./Components/IncomeExpenses.jsx";
import TransactionLists from "./Components/TransactionLists.jsx";
import { GlobalProvider } from "./Context/GlobalState.jsx";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionLists />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
