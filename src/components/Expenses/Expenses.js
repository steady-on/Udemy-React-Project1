import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import { useState } from "react";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = items.filter(
    (item) => `${item.date.getFullYear()}` === filteredYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={filteredYear}
          setFilteredYear={setFilteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
