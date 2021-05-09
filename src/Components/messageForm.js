import React, { useState } from 'react';

const MessageForm = () => {
    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);
    const onChangeHandler = e => {
        setValue(e.target.value);
    }
    const onSubmitHandler = e => {
        e.preventDefault();
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                {show ? <h3>value</h3> : null}
                <input 
                    type='text' 
                    placeholder='Enter your message!'
                    value={value}
                    onChange={onChangeHandler}
                    onSubmit={onSubmitHandler} />
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default MessageForm;