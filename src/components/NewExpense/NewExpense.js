import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

let count = 5
const NewExpense = ({onAddExpense}) => {
  const [isAdding, setIsAdding] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {...enteredExpenseData, id:count}
    onAddExpense(expenseData)
    count++
  }

  const startAddingHandler = () => {
    setIsAdding(true)
  }

  const stopAddingHandler = () => {
    setIsAdding(false)
  }

  return (
    <div className='new-expense'>
      {!isAdding && <button onClick={startAddingHandler}>Add new Expense</button>}
      {isAdding && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel= {stopAddingHandler} />}
    </div>
  )
}

export default NewExpense