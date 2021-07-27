import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const App = () =>{
    const [numb, setN] = useState(0);

    const increment = () =>{
        setN(numb+1);
    }

    const decrement = () =>{
        if((numb-1)<0){
            alert("You cant go below 0 🙂");
        }
        else{
            setN(numb-1);
        }
    }

    return(
        <>
            <div className="body">
                <div className="main">
                    <h1> {numb} </h1>
                    <div className="incdec">
                        <button onClick = {increment}> <AddIcon /> </button>
                        <button onClick = {decrement}> <DeleteIcon /> </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;