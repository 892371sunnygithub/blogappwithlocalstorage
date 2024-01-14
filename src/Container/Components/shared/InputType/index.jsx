import React from 'react'
import Form from 'react-bootstrap/Form';
import './index.css'
const InputType = ({controlId, inputlable, inputtype, placeholder, onfocus, name, value, onchange, error, showEyeIcon}) => {

  const getInputType = () => {
    if (inputtype === 'password') {
      return showEyeIcon ? 'text' : 'password';
    }
    return inputtype;
  };

  return (
    <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label>{inputlable} </Form.Label>
        <Form.Control type={inputtype==="password"? getInputType(): inputtype} className={error?"error":""} onFocus={onfocus} name={name} autoComplete='off' value={value} placeholder={placeholder} onChange={onchange} /> 
    </Form.Group>

  )
  
}

export default InputType