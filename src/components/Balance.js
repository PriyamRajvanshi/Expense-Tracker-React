import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const balance = transactions.reduce((acc, trans) => {
        return acc += trans.amount;
    }, 0)
    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${balance}</h1>
        </>
    )
}
