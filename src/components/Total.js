/**
  Total
  component with total expense showing

  props:
    //variables
    total: total expenses
*/
const Total = ({expenses}) => {
    return (
        <div className="total">
            <h2>Total Spendings</h2>
            <p className='total--amt'>
                Rs. {expenses.reduce((sum, expense) => sum + parseInt(expense.amount), 0)}
            </p>
        </div>
    )
}

export default Total;