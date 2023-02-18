import React, {useEffect, useState} from "react";
import mockExpensesService from '../service/mockExpensesService';
import { Add, List  } from '@mui/icons-material';
import './style.css';

const ListExpenses = () => {

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        mockExpensesService.getExpenses().then(setExpenses);
    }, []);

    return (
        <>
            <div className="rectangle">
                <div className="title">EXPENSES</div>
            </div>
            <div className="title2">Gastos</div>
            <div className="title3">Total Gastos: 2</div>
            <div className="tableExpsenses">
                <div className="titleExpenses">
                    <div className="formatTitleExpense">Fecha</div>
                    <div className="formatTitleExpense">Amount</div>
                    <div className="formatTitleExpense">Description</div>
                    <div className="formatTitleExpense">Budget Item</div>
                    <div className="formatTitleExpense">Type</div>
                </div>
                {expenses.map(expense => (
                    <div className="expense">
                        <div className="expenseFormat">{expense.date}</div>
                        <div className="expenseFormat">{expense.amount}</div>
                        <div className="expenseFormat">{expense.description}</div>
                        <div className="expenseFormat">{expense.budgetItem}</div>
                        <div className="expenseFormat">{expense.type}</div>
                    </div>
                ))}
            </div>
            <div className="footer">
                <div className="footerElement"><List sx={{color: "white"}} fontSize="large"/></div>
                <div className="footerElement"><Add sx={{color: "white"}} fontSize="large"/></div>
            </div>
        </>
    )
}

export default ListExpenses;
