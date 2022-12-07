import React from 'react';

function Header({totalIncome}) {
  return (
    <div>
        <header>
            <h1>Income Tracker</h1>
            <div className="total-income">R${totalIncome}</div>
        </header>
    </div>
  )
}

export default Header