import React, { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) =>{


    const [enteredTitle , setEnteredTitle] = useState('')
    const [enteredAmount , setEnteredAmount] = useState('')
    const [enteredDate , setEnteredDate] = useState('')
    

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        
        const expeseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };

        props.onSaveExpenseData(expeseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit={formSubmitHandler}>
        <div className="new-expense__contols">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" value={enteredTitle} onChange = {titleChangeHandler} />
            </div>

            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange = {amountChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" min= "2019-01-01" max="2022-12-31" value={enteredDate} onChange = {dateChangeHandler}/>
            </div>

            <div className="new-expense__action">
                <button type='submit'> Add Expense </button>
            </div>

        </div>
        
    </form>

}

export default ExpenseForm;