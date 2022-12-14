import { useState } from 'react'

function learn_useState(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [info, setInfo] = useState({
        name:'Nguyen Van A',
        age: '18'
    })
    
    const handleUpdate = () =>{
        // setInfo({
        //     ...info,
        //     bio: 'Yeu mau hong'
        // })

        // setInfo(prev => ({
        //     ...prev,
        //     bio: 'Yeu mau hong'
        // }))

        setInfo(prev => {
            //logic
            return{
                ...prev,
                bio: 'Yeu mau hong'    
            }
        })
    }
    
    return(
        <div className="App" style={{ padding:20 }}>
            <h1>{JSON.stringify(info)}</h1>
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}
export default learn_useState;
