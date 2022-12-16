/* eslint-disable react-hooks/rules-of-hooks */
// import { useState, useEffect } from "react";
import React from 'react';  
import { useState, useEffect, useCallback, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";
const BaconParagraphs = (props:any) => {
    const [baconParagraphText, setBaconParagraphText] = useState([]);

    useEffect(() => {
        setBaconParagraphText(props.chopBacon.map((piece: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined) => <p key={Math.random()}>{piece}</p>));
    }, [props.chopBacon]); // Props

    return (
        <>
            <p>Number of paragraphs: {baconParagraphText.length}</p>
            {baconParagraphText}
        </>
    );
};

const UseCaseUpdateFetch = () => {
    const [bacon, setBacon] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = async (e: { preventDefault: () => void; target: { paragraphs: { value: any; }; }; }) => {
        e.preventDefault();

        setIsLoading(true);
        const response = await fetch(`https://baconipsum.com/api/?type=all-meat&paras=${e.target.paragraphs.value}&start-with-lorem=1`);
        const data = await response.json();
        setIsLoading(false);
        setBacon(data);
    };
    const styleButton = {
        color: "#ffffff",
        backgroundColor: "red",
        padding: "15px 30px",
        margin:"30px"
    };
    return (
        <>
            <hr />
            <h2>useEffect use case</h2>
            <h3>Running on props change: update paragraph list on fetched API data update</h3>
            <form onSubmit={submitHandler}>
                <label htmlFor="paragraphs" style={{ display: "block", marginBottom: "1rem" }}>How many paragraphs of "Bacon ipsum" do you want?</label>
                <select id="paragraphs" name="paragraphs">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <input type="submit" value="Show me the bacon!" style={styleButton} /> {isLoading && <span>Getting paragraphs... 🐷</span>}
            </form>
            <BaconParagraphs chopBacon={bacon} />
        </>
    );
};

export default UseCaseUpdateFetch;

//////////////// UseCaseLiveFilter
// const array = [
//     { key: '1', type: 'planet', value: 'Tatooine' },
//     { key: '2', type: 'planet', value: 'Alderaan' },
//     { key: '3', type: 'starship', value: 'Death Star' },
//     { key: '4', type: 'starship', value: 'CR90 corvette' },
//     { key: '5', type: 'starship', value: 'Star Destroyer' },
//     { key: '6', type: 'person', value: 'Luke Skywalker' },
//     { key: '7', type: 'person', value: 'Darth Vader' },
//     { key: '8', type: 'person', value: 'Leia Organa' },
// ];

// const UseCaseLiveFilter = () => {
//     const [inputValue, setInputValue] = useState('');
//     const [inputType, setInputType] = useState('');
//     const [filteredArray, setFilteredArray] = useState(array);

//     const inputValueHandler = (e:any) => {
//         setInputValue(e.target.value);
//     };

//     const inputTypeHandler = (e:any) => {
//         setInputType(e.target.value);
//     };

//     useEffect(() => {
//         setFilteredArray((_) => {
//             const newArray = array.filter(item => item.value.includes(inputValue)).filter(item => item.type.includes(inputType));
//             return newArray;
//         });
//     }, [inputValue, inputType]);

//     // Prepare array to be rendered
//     const listItems = filteredArray.map((item) =>
//         <>
//             <tr>
//                 <td style={{ border: '1px solid lightgray', padding: '0 1rem' }}>{item.type}</td>
//                 <td style={{ border: '1px solid lightgray', padding: '0 1rem' }} > {item.value}</td>
//             </tr >
//         </>
//     );

//     return (
//         <>
//             <hr />
//             <h2>useEffect use case</h2>
//             <h3>Running on state change: live filtering</h3>
//             <form style={{ maxWidth: '23rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                 <div>
//                     <label htmlFor="input-type">Filter by <b>type</b></label><br />
//                     <input type="text" id="input-type" autoComplete="off" onChange={inputTypeHandler} style={{ height: '1.5rem', width: '10rem', marginTop: '1rem' }} />
//                 </div>
//                 <div>
//                     <label htmlFor="input-value">Filter by <b>value</b></label><br />
//                     <input type="text" id="input-value" autoComplete="off" onChange={inputValueHandler} style={{ height: '1.5rem', width: '10rem', marginTop: '1rem' }} />
//                 </div>
//             </form>
//             <br />
//             <table style={{ width: '20rem', border: '1px solid gray', padding: '0 1rem' }}>
//                 <tr>
//                     <th>Type</th>
//                     <th>Value</th>
//                 </tr>
//                 {listItems}
//             </table>
//         </>
//     );
// };

// export default UseCaseLiveFilter;


////////////////////UseCaseInputValidation
// function UseCaseInputValidation() {
//     const [input, setInput] = useState('');
//     const [isValid, setIsValid] = useState(false);

//     const inputHandler = (e:any) => {
//         setInput(e.target.value);
//     };

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             if (input.length < 5 || /\d/.test(input)) {
//                 setIsValid(false);
//             } else {
//                 setIsValid(true);
//             }
//         }, 1000);
//         return () => clearTimeout(timer);
//     }, [input]);

//     return (
//         <>
//             <hr />
//             <h2>useEffect use case</h2>
//             <form>
//                 <input type="text" id="input" autoComplete="off" onChange={inputHandler} style={{ height: '1.5rem', width: '20rem', marginTop: '1rem' }} />
//             </form>
//             <p><span style={isValid ? { backgroundColor: 'lightgreen', padding: '.1px' } : { backgroundColor: 'lightpink', padding: '.1px' }}>{isValid ? 'Valid input' : 'Input not valid'}</span></p>
//         </>
//     );
// };

// export default UseCaseInputValidation;


///////// 
// function content() {
//     const [posts, setPosts] = useState([])
    
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts=>{
//             setPosts(posts);
//         })
//     },[])

//     return (
//         <>
//             <ul>
//                 {posts.map(post=>(
//                     <li key={post.id}>{post.title}</li>
//                 ))}
//             </ul>
//         </>
//     );
// };

// export default content;

