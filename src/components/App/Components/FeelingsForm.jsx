import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Radio} from '@mui/material';

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
                <h1>How are you feeling about today's</h1>
                <input onChange={(event) => setState(event.target.value)} required></input>
                <button type="submit">Next</button>
            </form>
        </>
    )
}

export default FeelingsForm;