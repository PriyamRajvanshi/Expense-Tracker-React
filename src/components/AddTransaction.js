import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const { addTransaction , transactions } = useContext(GlobalContext);


    function textChange(event) {
        setText(event.target.value);
    }

    function amountChange(e) {
        setAmount(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        const maxId = transactions.reduce((acc, trans) => acc= Math.max(acc, trans.id), 0);
        console.log(maxId);
        const newTrans = {
            id: maxId+1,
            text,
            amount: +amount
        }
        addTransaction(newTrans);
        setText("");
        setAmount("");
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form id="form">
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value={text} onChange={textChange} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" id="amount" value={amount} onChange={amountChange} placeholder="Enter amount..." />
                </div>
                <button className="btn" onClick={onSubmit}>Add transaction</button>
            </form>
        </div>
    )
}
