import { useState } from 'react'

function learn_useState(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [counter, setCounter] = useState(1)
    const handleIncrease = () =>{
        setCounter(counter + 1)
    }
    return(
        <div className="App" style={{ padding:20 }}>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
}
export default learn_useState;
