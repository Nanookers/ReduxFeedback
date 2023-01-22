import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import axios from "axios";


function CommentsForm(){

    const [commentState, setState] = useState('')

    const history = useHistory();

    const dispatch = useDispatch();
    

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const newPayload = {
            type: 'SET_COMMENT',
            payload: commentState
        }

        dispatch(newPayload);

        history.push('/ReviewFeedback')
    }



    return(
        <>  
            <form onSubmit={handleOnSubmit}>
            <input onChange={(event) => setState(event.target.value)} ></input>
                <button type="submit">Finish</button>
            </form>
        </>
    )

}

export default CommentsForm;