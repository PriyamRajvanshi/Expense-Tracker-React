import React from "react";

export default (state, action) => {
    switch (action.type) {
        case 'DELETE':
            return {
                ...state,
                transactions: state.transactions.filter(trans => trans.id !== action.payload)
            }
        case 'ADD':
            return{
                ...state,
                transactions : [action.transaction, ...state.transactions]
            }
        default:
            return state;
    }
}