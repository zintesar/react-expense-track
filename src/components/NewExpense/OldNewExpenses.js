import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpenses = (props) => {

    const saveExpeneseDataHandler = (enteredExpenseData) => {
        const expeneseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expeneseData)
    }

    return <div className='new-expense'>

        <ExpenseForm onSaveExpenseData = {saveExpeneseDataHandler}></ExpenseForm>

    </div>
}

export default NewExpenses;