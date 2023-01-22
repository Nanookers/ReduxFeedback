import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function UnderstandingForm(){

    const [understandingState, setState] = useState(0)

    const dispatch = useDispatch();

    const history = useHistory();

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const newPayload = {
            type: 'SET_UNDERSTANDING',
            payload: understandingState
        }

        dispatch(newPayload);

        history.push({
            pathname: '/SupportForm',
        });
    }

    return(
        <>  
            <h1>On a scale of 1 to 5, how well do you understand it?</h1>
            <form onSubmit={handleOnSubmit}>
            <input onChange={(event) => setState(event.target.value)} required ></input>
                <button type="submit">Next</button>
            </form>
        </>
    )

}

export default UnderstandingForm;