import React, { useState } from 'react';

// import Sender from './Components/Sender.js';
// import Reciever from './Components/Reciever.js';
// import MessageForm from './Components/messageForm.js';

const App = () => {
    //states
    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);
    const [store, setStore] = useState([]);
    
    //handlers
    const onSubmitHandler = async e => {
        e.preventDefault();
    }
    const onChangeHandler = e => {
        setStore(e.target.value);
    }

    //return
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type='text' onChange={onChangeHandler} />
                <button type='submit' onClick={() => setShow(true)}>Submit</button>
                {show 
                    ?<ul>
                        {store.map(txt => (<h2>{txt}</h2>))}
                    </ul> 
                    : null}
            </form>
        </div>
    )
}

export default App;