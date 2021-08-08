import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    const expense = transactions.reduce((acc, trans) => {
        if (trans.amount < 0) {
            acc += trans.amount;
        }
        return acc;
    }, 0)
    const income = transactions.reduce((acc, trans) => {
        if (trans.amount > 0) {
            acc += trans.amount;
        }
        return acc;
    }, 0)
    return (
        <>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p id="money-plus" className="money plus">+${income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p id="money-minus" className="money minus">${expense}</p>
                </div>
            </div>
        </>
    )
}
