import { useHistory } from 'react-router-dom';

function FeelingsForm(){

    const history = useHistory();


    return(
        <>
            <button onClick={() => {history.push('/UnderstandingForm')}}>Next</button>
        </>
    )
}

export default FeelingsForm;