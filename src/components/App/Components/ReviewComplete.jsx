import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';


function ReviewComplete (){

    const history = useHistory();

    const dispatch = useDispatch();

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const newPayload = {
            type: 'RESET_PAYLOAD',
            payload: { }
        }

        dispatch(newPayload);

        history.push({
            pathname: '/',
        });
    }



    return (
        <>
            <h1>Thanks for your Submission!</h1>
            <p>Would You like to Submit Again?</p>
            <button onClick={handleOnSubmit}>Home</button>
        </>
    )
}

export default ReviewComplete;