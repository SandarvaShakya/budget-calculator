/**
  Input
  basic component with label and input tag

  props:
    //variables
    title: label for the input field
    placeHolder: placeholder for the input field
    value: the value in the input field

    //function(s)
    onChange: function that is triggered when input values are changed
*/
const Input = (props) => {
    return (
        <div className="input">
            <label htmlFor={props.title} className='label'>{props.title}</label>
            <input 
                type="text" 
                placeholder={props.placeHolder} 
                className='input-field' 
                onChange={(event) => props.onChange(event)}
                value={props.value}
            />
        </div>
    )
}

export default Input;