import { useHistory } from 'react-router-dom';

function UnderstandingForm(){

    const history = useHistory();

    return(
        <>
            <button onClick={() => {history.push('/SupportForm')}}>Next</button>
        </>
    )

}

export default UnderstandingForm;