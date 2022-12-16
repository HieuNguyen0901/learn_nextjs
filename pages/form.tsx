import { useState } from 'react';
import Link from "next/link";

function learn_useState(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showcontent, setShowcontent] = useState()

    const handleIncrease = () =>{
        const button = document.getElementById("button")!
        button.remove();
        setShowcontent(   () => {
            return (
                
                <>
                <p>this is content</p>
                <Link href="/" >Read more</Link>
                </>  
            )
        });
        
    }
    return(
        <div className="App" style={{ padding:20 }}>
            <div>{showcontent}</div>
            <button id="button" onClick={handleIncrease}>Show more</button>
        </div>
    );
}
export default learn_useState;
