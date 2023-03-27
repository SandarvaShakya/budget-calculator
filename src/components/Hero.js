import Input from './Input';
import Button from './Button';
import uuid from "react-uuid";
/**
  Hero Section
  component with Input[Component] fileds and a Button[Component]

  props:
    //variables
    charge: title of the expense
    amount: amount of the expense
    id: the id of the expense which is stored after edit is true
    edit: chechs weather edit is true or false
    expenses: array of all the expenses
    alert: alert message
    message: success message

    //functions
    setCharge: function to change state of charge
    setAmount: function to change state of amount
    setEdit: function to change state of edit
    setExpenses: function to change state of expenses
    setAlert: function to set alert message
    setMessage: funciton to set success message
*/
const Hero = (props) => {
  const charge = props.charge
  const amount = props.amount
  const id = props.id

  const edit = props.edit
  const expenses = props.expenses

  //records each keyboard stroke for charge
  const handleChargeChange = (event) => {
    props.setCharge(event.target.value);
  }

  //records each keyboard stroke for amount
  const handleAmountChange = (event) => {
    props.setAmount(event.target.value);
  }
  
  /**
    * adds expense to the list
    * if edit is true then edits the expense already recorded
  */
  const add = (event) => {
    event.preventDefault();
    if(charge !== '' && amount !== ''){
      if(edit){
        const newExpenses = expenses.map(expense => expense.id !== id ? expense : {...expense, charge, amount})
        props.setExpenses(newExpenses)
        props.setCharge('')
        props.setAmount('')
        props.setEdit(false)
        props.setMessage('Expense Successfully Edited.')
        setTimeout(() => {
          props.setMessage(null)
        }, 3000)
      }else{
        //to check if amount is number
        if(isNaN(amount)){
          props.setAlert("Amount should be a valid number");
          setTimeout(() => {
            props.setAlert(null)
          }, 3000)
          props.setAmount("")
          return;
        }

        const expense = {
          id: uuid(),
          charge: charge,
          amount: amount
        }
        props.setExpenses(prevExpenses => {
          return (
            [...prevExpenses, expense]
          )
        })
        props.setCharge('');
        props.setAmount('');
        props.setMessage('Expense Added')
        setTimeout(() => {
          props.setMessage(null)
        }, 3000)
      }
    }else{
      props.setAlert('Both charge and amount should be entered!')
        setTimeout(() => {
          props.setAlert(null)
        }, 3000)
    }
  }

  return (
    <form className="hero--section" onSubmit={add}>
      <div className="inputs">
        <Input 
          placeHolder="EG: Rent" 
          title="Title"
          onChange={handleChargeChange}
          value={charge}
        />
        <Input 
          placeHolder="EG: 14000" 
          title="Amount"
          onChange={handleAmountChange}
          value={amount}
        />
      </div>
      <Button 
        text={edit ? 'EDIT EXPENSE': "ADD EXPENSE"}
        className={edit ? 'fa-solid fa-pen plus': "fa-solid fa-plus plus"}
        class="btn btn--green"
      />
  </form>
  )
}

export default Hero;