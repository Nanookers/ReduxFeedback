import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
function FeelingsForm(){

    const [feelingState, setState] = useState(0)

    const dispatch = useDispatch();

    const history = useHistory();

    const handleOnSubmit = (event) => {

        event.preventDefault();
        
        console.log(feelingState);

        const newPayload = {
            type: 'SET_FEELING',
            payload: feelingState
        }

        dispatch(newPayload);

        history.push({
            pathname: '/UnderstandingForm',
        });
    }

    return(
        <>  
            <form onSubmit={handleOnSubmit}>
                <input onChange={(event) => setState(event.target.value)} ></input>
                <button type="submit">Next</button>
            </form>
        </>
    )
}

export default FeelingsForm;