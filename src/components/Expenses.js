import Card from "./Card"
import Button from "./Button"

/**
  * Expenses Section
  * component with expense Card(s)[Component]
  * props:
    //variables
    edit: checks weather edit is true or false
    expenses: array of all the expenses

    //functions
    setExpenses: function to change the state of expenses
    setCharge: function to change state of charge
    setAmount: function to change state of amount
    setEdit: function to change state of edit
    setId: function to set the id to the expense clicked
    setAlert: function to set alert message
*/
const Expenses = (props) => {
    const expenses = props.expenses
    
    /**
     * sets the input fileds charge and amount with values of the expense
     * sets edit to true
     * set the id for the expense to be edited
     * @params (
     *  charge: title of the expense whose edit button is clicked
     *  amount: amount of the expense whose edit button is clicked
     *  id: id of the expense whose edit button is clicked
     * )
    */
    const handleEditClick = (charge, amount, id) => {
        props.setCharge(charge);
        props.setAmount(amount);
        props.setEdit(true);
        props.setId(id);
    }

    /**
     * deletes the expense whose id is passed
     * @param (id: id of the expense whose delete button is clicked)
     */
    const handleDeleteClick = (id) => {
        const expense = expenses.find(expense => expense.id === id)
        const confirm = window.confirm(`Confirm delete expense ${expense.charge}`);

        if(id && confirm){
            props.setExpenses(props.expenses.filter(expense => expense.id !== id))
            props.setAlert('Expense Deleted.');
            setTimeout(() => {
                props.setAlert(null)
            }, 3000)
        }
    }

    /**
     * clears all expenses
     */
    const clearAll = () => {
        const confirm = window.confirm("Are you sure you want to clear all expenses?");
        if(confirm){
            props.setExpenses([]);
            props.setAlert('All Expenses Cleared.');
            setTimeout(() => {
                props.setAlert(null)
            }, 3000)
        }
    }

    return (
        <div className="expenses">
            <h2>Expenses</h2>
            {expenses.map(expense => {
                return (
                    <Card 
                        key={expense.id}
                        id={expense.id}
                        title={expense.charge}
                        amount={expense.amount}
                        onEditClick={handleEditClick}
                        onDeleteClick={handleDeleteClick}
                    />
                )
            })}
            {expenses.length > 0 
                ? <Button 
                    text="CLEAR EXPENSES"
                    className="fa-solid fa-plus plus icon--white"
                    class="btn btn--red"
                    onClick={clearAll}
                  />
                : ''
            }
        </div>
    )
}

export default Expenses;