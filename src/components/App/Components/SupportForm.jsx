import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function SupportForm(){

    const [supportState, setState] = useState(0)

    const dispatch = useDispatch();

    const history = useHistory();

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const newPayload = {
            type: 'SET_SUPPORT',
            payload: supportState
        }

        dispatch(newPayload);

        history.push({
            pathname: '/CommentsForm',
            supportState
        });
    }

    return(
        <>  
            <h1>Did you feel supported in today's learning?</h1>
            <form onSubmit={handleOnSubmit}>
            <input onChange={(event) => setState(event.target.value)} required></input>
                <button type="submit">Next</button>
            </form>
        </>
    )


}

export default SupportForm;