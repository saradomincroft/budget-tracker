import React from 'react';

export default function IncomesTotal({ incomes }) {
    const totalAmount = incomes.reduce((total, incomes) => total + incomes.amount, 0);

    return (
        <div>
            <h2>Total Income: ${totalAmount}</h2>
        </div>
    );
}
