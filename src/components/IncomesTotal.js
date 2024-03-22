import React from 'react';

export default function IncomesTotal({ incomes }) {
    const totalAmount = incomes.reduce((total, income) => total + income.amount, 0);

    return (
        <div>
            <h2>Total Income: ${totalAmount}</h2>
        </div>
    );
}
