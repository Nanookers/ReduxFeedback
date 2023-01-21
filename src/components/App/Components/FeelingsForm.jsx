import { useHistory } from 'react-router-dom';

function FeelingsForm(){


    return(
        <>
            <button onClick={() => {history.push('/UnderstandingForm')}}>Next</button>
        </>
    )
}

export default FeelingsForm;