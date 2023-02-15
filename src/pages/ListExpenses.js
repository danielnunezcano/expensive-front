import React from "react";
import './style.css';
import { Add, List  } from '@mui/icons-material';

const ListExpenses = () => {
    return (
        <>
            <div className="rectangle">
                <div className="title">EXPENSES</div>
            </div>
            <div className="title2">Gastos</div>
            <div className="title3">Total Gastos: 2</div>
            <div className="footer">
                <List sx={{color: "white"}} fontSize="large"/>
                <Add sx={{color: "white"}} fontSize="large"/>
            </div>
        </>
    )
}

export default ListExpenses;
