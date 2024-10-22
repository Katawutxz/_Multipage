import './Variable.css';
import { useState } from 'react';

function Variable(props) { 

    const [name] = useState(props.name || "Variable");
    
    // const [value, setValue] = useState(props.value || 0)



    

    return (
        <div className='variable-container'>
            <h3 className='variable-title'>{name || "Variable"}</h3>
            <button id='minus' className='btn btn-danger' onClick={() =>props.setValue(props.value - 1)}>-</button>
            <span className='variable-value' >{props.type && props.type === 'int' ? props.value : props.value.toFixed(2)}</span>
            <button id='plus' className='btn btn-success' onClick={() => props.setValue(props.value + 1)}>+</button>




        </div>);
}

export default Variable;